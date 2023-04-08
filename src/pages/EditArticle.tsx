import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/ui/form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textarea from "../components/ui/form/Textarea";
import { useCreateArticle } from "../hooks/article/useCreateArticle";

type FormValues = {
  articleTitle: string;
  articleAbout: string;
  article: string;
  tag: string;
};

const schema = yup
  .object()
  .shape({
    articleTitle: yup.string().required(),
    articleAbout: yup.string().required(),
    article: yup.string().required(),
    tag: yup.string().required(),
  })
  .required();

const EditArticle = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });
  const createArticleMutate = useCreateArticle();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let tagArr = [];
    tagArr.push(data.tag);

    const article = {
      title: data.articleTitle,
      description: data.articleAbout,
      body: data.article,
      tagList: tagArr,
    };

    createArticleMutate(article);
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <fieldset className="form-group">
                  <Input
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    control={control}
                    name="articleTitle"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Input
                    className="form-control"
                    placeholder="What's this article about?"
                    control={control}
                    name="articleAbout"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Textarea
                    className="form-control"
                    placeholder="Write your article (in markdown)"
                    control={control}
                    name="article"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    control={control}
                    name="tag"
                  />
                  <div className="tag-list">
                    <span className="tag-default tag-pill ng-binding ng-scope">
                      <i className="ion-close-round"></i>
                      xorm
                    </span>
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary bg-[#5cb85c]"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
