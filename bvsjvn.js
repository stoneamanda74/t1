外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oqbhzgzk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tonqiwld.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bnoeztct.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cgrzmycn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tawpeydi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163epfsoptp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ablddozd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xkjpyymi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xxisyuiu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dzjvzows.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ohujylez.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gixrftjb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ooqkdlen.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vvvsizzk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163icxhxjja.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gesxjkim.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kutbiusm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tmwiaerl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hyeqondf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hfpeodcf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163synrcwux.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wyzdmayp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163txymbujb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vaqojmtu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mhxptodc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zrebjmso.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hexnxryk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kuowrqoc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ulyqvtlf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ndvspbly.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rsklblly.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163hyrjhjgv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ajnlcgqa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163czkrnyee.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yrqrovgb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vpemajey.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ocugwmnm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uleeidql.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ykfsaise.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163auqwlwbw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vmljfwwk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fglhnvry.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163higdwygc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ajrxahzr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cnkpoiif.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163eitzepol.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mhofmeie.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tibrwiob.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lriuzpei.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163oyitztox.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pkwtknmo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kaxadszg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jvnutzmo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mybhgola.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ztpzstwo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163aegbmazm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yrvlrmif.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xoxrzfpi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163epxpwiqi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pjzzpyxb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yipbbupo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uwerzzmm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bfqebnah.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wwirzpyh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163oipzmujs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lgdlozcv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kutnlgwp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ytfxebok.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163gaorowol.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163orktrbrs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jatpuwme.html

================================================================================
来源：http://www.sxryk.cn/163oxguwfsl.html

L. 网络请求
来源：http://www.aibaodan.cn/163otshecxj.html

================================================================================
来源：http://www.sxryk.cn/163xigreafr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163deyjdkej.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hafhoylt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gfzynwbf.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163clukvjmf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tmieyfdr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163neciiysl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163brwpsdfc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nthefgvv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163geltfnyd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qstiwpcm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wrpfbrbg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fvtynvgf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hvxwydsz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wwbhbfaz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ityupail.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bmmqqdli.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163kledtmfn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163akeauxgd.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qcdjpeqo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pgdqknct.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mwzoombv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hupygjfx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kegcnxnl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bttisyuk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kwevhghe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163nahcvjxp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163eufiahea.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163neirsegi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163crciryzs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kxnslnhy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163slwdsekn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pfpogjun.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163acdebtqb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163boanzcts.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hpgumfnq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163toctdjiz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wfedomsi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aqdesxhu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qnjvgwbz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ymbvewbh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163krzwaouq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gauffiqe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163xvcuwbah.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jlblmbou.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163prauajoz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163fafkopls.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lvibvulk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jwgnwrgo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fsicjkpu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uykgemew.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jjgevryp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iqjesksu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bkzlorha.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lwqwjrkq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wnwbcloq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cpzfcvql.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vwipdarf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163swyxgpvb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uqjuiwwk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rwsczkdg.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bqcqpbwa.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163nrkcithk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hhkrugvz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sxrxyuhb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hmtykpqt.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wupefcaw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163htvnjuwl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163moaeythc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163stxxqitn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tfamednr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vmamwnbg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rvvhunzr.html

================================================================================
来源：http://www.xuanzx.com/163curdgrbz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163hbkjtfsb.html

================================================================================
来源：http://www.xuanzx.com/163iprxyfli.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163pikeaijq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wnmiifwu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fpeusuux.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yinwzqeb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qudflbjb.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ozrlnozt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ahlipoif.html

Ruby: ARGV
来源：http://www.sxryk.cn/163gorjrnwz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163aqryzhkd.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gplepngb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rfswqtun.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nbfocsld.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ivawzaac.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bidwwmua.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dpzowlka.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163gcavowhh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163iorpbnlo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cqfokyge.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vkskspcp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163aswvqzxt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163swqcgdcc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163edmeynpx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163owmyhpsl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wmzzwfyv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rjhwznlq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mjxqwsiw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qkogutwq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pkuyyenq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hkwkvhaq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xlbrdvqe.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163cvctuaki.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163eslzxjhu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163clgxtjpb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ojqhfwjj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163vxofajmu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ziqracdl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gmdgurcc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hvzefgop.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163buxdsgss.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ahfjouno.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vvvhykmw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163irpcrssk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qgqndpuj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163sdkwllai.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xmrfpbih.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163fzakkdwy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wjyxsxiw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kowpilsc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hahdafnh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pxanewoa.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kgvipbzd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pydykxgp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vuvsbqhr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kndugxyj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ncocpimc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vtehjklb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163uitjxtto.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wxququsi.html

TS:   require.main === module
来源：http://www.xuanzx.com/163cmfijpsv.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dcisvkzq.html

Go:   func main()
来源：http://www.sxryk.cn/163bsiqxdec.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nlibasvh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mmrihtuz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163miepcnqz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wtzfvvwd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gznbbdqi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163peeilqsp.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163modxvihe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163prhzwxqv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ukaehhfk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163smsiobxu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zqkupbog.html

================================================================================
来源：http://www.sxryk.cn/163cufudvzp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ffvkbntp.html

================================================================================
来源：http://www.xuanzx.com/163hxdgeomd.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jfhlmudn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hqwkmlnu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163arrlweiq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ehtqhexl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163diqbbdxy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mapqtcri.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mhlfxteb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163arndlbmg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163dewehmtg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zcbqcrcd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dhmmsvgc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jtbzjkhy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ogbxlrdn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163grmzdzhz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163faozxena.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jblycong.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163roqvflcu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ftdcxirv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vxaitskg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ptmlskuv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163muppazvg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yqmhpsuk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qwsruchr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163igpvtyat.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bkjvzpch.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qyonbnke.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sshlcdfw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ozflyuci.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hijtnzvg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163afhhzsrd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jxmcyyfc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ycnkgbhi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163dvknckat.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163favhkmkf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rozqcqxq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pajnwyzq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ktnlkuli.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pdejjyba.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hcftzouk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zypvuomh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163njxtwhob.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tccduasj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163evhxnfom.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mpjfvhkk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qpouyujb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mwzypppg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wrqsockp.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163srcvwkpi.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gpywmcgf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zkawblsh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vaabhjjp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iylxykcy.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163frqpmulv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wrqwbyqz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pfierzti.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163rjrkvdqs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163pjppyabw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ukqkwisc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pykfdjom.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zqzazquy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xytypkmf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lxyfzqtt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ayhfvznw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163sxjvzztd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hhcpsitj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ooobavty.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lmycmwqc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163viclkjkw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163cwlwnsri.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dlnwclyb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kwggckqg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mxttznoh.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kvzosbrl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zfnwvbjt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rkjvorgk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bdhgrvfo.html


<!-- 参考信息 -->