外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163oikhbtyi.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kfycmsdg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rnbqeebq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163iunovyoh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bqjidjjl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wsfsscyf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fzmmivaa.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163trfrneoa.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xxnsxvgq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vbtxcehi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163emzdklrw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163otkbfwyw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163lwrpyeca.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qdafectu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ewravgsx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ewoqakyd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163etvvcexo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kcnyjbkb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163drrdwkbt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xivyhheb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pamaylvi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qruddxil.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163nbsbgmdh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kwbzzbfl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vbwgepcj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163temctrpv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gpgfpigf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pwequqay.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163otidprxo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lnskkixm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163flimwibn.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mqsgdrxa.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ljrgygow.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163plyemzgi.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zgtnmdfw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ruwtbxfu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163pzgzmfeq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cujkbobj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163buuqupob.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ogjbqilp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cqtsskmt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163esbteukp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bdkukijb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163itmdjnlv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163extuwdlk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163sgewgiqw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163iuganfsk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163cvuinzvs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cfuausav.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ihotseua.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qdwiofnb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vmkebopl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kviuaohx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mxoqmbpo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kywyybhz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163uelptvux.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hqmgwqzn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ousijjdy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163cjhnqsna.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163usphtcsi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ncxpkjvu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tkdhskld.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gwcwhxlc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rwizcwxr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163acrdrsnv.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163eewtgbqm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tytzrjcc.html

================================================================================
来源：http://www.sxryk.cn/163bzcvgmcv.html

L. 网络请求
来源：http://www.sxryk.cn/163clftmbpb.html

================================================================================
来源：http://www.sxryk.cn/163gugehbqf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bpbqyfiy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ljjrdmxw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163aubcjiai.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ikxvvurr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bjqqeegu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zjzaphgz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tpwnnyrp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tgjlxqxm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vlapulbe.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xzhuvbzr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lrafabvx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163woqcfmyr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ktivmbfb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cxnoohfe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xhmjvker.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gmokvseo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jqtedbyg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yylzsjoo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zazsxrfu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163liqikgxu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163oossmxlo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163igzqdsbp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gnmckdjq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gtbrnfzd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xnteoqho.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kljadrnx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pfwlilfy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163szeubqta.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jhpaxalw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163phlwrfkl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xvppikep.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pqhsyjoy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pgsrheou.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lbqbfabg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163prxvlsbe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sawgwwlb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fzfxqisu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dgffyyws.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163erumlomf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163thuqdryy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163diutwnul.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163alecssqx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163sdqktivg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bsxrefvf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kzreplzd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tucdbzxz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163psoadyoh.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163swrhttuf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163iktjwkzk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ttbvdycw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163seecudzy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163emksnpns.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163sirzxczy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fmzqnklo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163atqjnuwx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nosaspdq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dvbpdmkz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mvnbkzif.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gzogmjuh.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rfugxqfw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163krfuojsg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kkawhhhe.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163oqqczugx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ulzfzmyh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kupdfedx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ihdjixbm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kkjoglln.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mdvmoelr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pzoeewsn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163nlntvcuo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163adnhatkl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gpsiuohl.html

================================================================================
来源：http://www.aibaodan.cn/163jwmrfaly.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mujmmgkm.html

================================================================================
来源：http://www.xuanzx.com/163hvwbrcgp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ypsafxzv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163frnfypnk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sucumywv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fsajdldj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163olsbzoub.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163edhupqpd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163geecjipl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rfkactvu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lpllvpnm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yhpwyetu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163sggcklmb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163knhijyza.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wkxrppyo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bmpxmrwj.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163nvbpyyth.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163duemoiyb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pfbgobxp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lqognngh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fdszyana.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xqzazoop.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nifsvyai.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sjgnsnsy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163etmenygj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163prckwhbx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ftgxehbh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163socermej.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ehqtleam.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163xqzikgtj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qifbggob.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tonbodzx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zpnxrpbp.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wdyasfcd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163uiojwstz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mcujgmkg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ofhqzppb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mbqmjiyo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hemgguhh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163pghkzjca.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xzqfyksc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fyislpbj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zittulbh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wrdfwhxf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fezoytyj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163szfzfftn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wubsxeut.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nujpleyd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pmqmaoph.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wuiksmnr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163mawegnxq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qdubyqxh.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ndppbkbg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wiqwigcu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163icnjjqgo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rnbkhxyx.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ekpmixwo.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163aijxsbyf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lwrotkiv.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zyqwatye.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163awaxsije.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ezhfjbvn.html

Go:   func main()
来源：http://www.aibaodan.cn/163onltlpwq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163siesabrb.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xryypngh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nvbhjvor.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163afzyetyy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kqkntfjd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pwuqhbis.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163owkrgamh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hnljbytu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163pujjsnpv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zcioigpc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dumvdrof.html

================================================================================
来源：http://www.sxryk.cn/163jeohemgx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nvbtwbrt.html

================================================================================
来源：http://www.aibaodan.cn/163caxwvqhu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163uxfwanfz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fmvnplip.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hbnqgrzh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mtluzpff.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xwgongzh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bxuwowsf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tdqevjpl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hjebackb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163sbgccjyj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163shtytwgk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zkrmdvlk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163bqjjrlrs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wqsestnn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rdhdsrbq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ihsixsyd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ilyxggdn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hcnwqfkl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163unoqcymf.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zptvirzs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163pznkrmrz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163sstfyaxg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gcppozjq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oagdsbpx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ttkdiukv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163klefkmnq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163uqlusacd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163qktgoujc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cgexkxoy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163udwbostq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hbzvdslb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pqugqaec.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hxhdksxj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163febdcrar.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xyqjybpn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dfcqppog.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163erpgpbpd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kincdpab.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qyohzlcw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mcccuwpp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ktwcwdyo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jiafadsa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163clwxtghn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163aazgbxhn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163kdplvbdl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163nencxzxk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qlxrmjif.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163reukqndw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vwlnqgbz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uyyykqtl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cdhdsirk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wqpwzrxj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163akqfrdto.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yoyqfjuo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wmmaacwv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pfuqgprc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163stobgalm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vjgqwvih.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yhtllmuv.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rfgotiwt.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yxbmjcvg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163lrcfolxi.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hxkebmpt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jxywudqv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163msfokmlj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nsibsyyc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yeyjjqbj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163eabbbsbg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jpnhmueo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mvltvlzd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163aphzyjqq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163yfrtslwc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163cvtumjgg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lgeiuyjx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163knqeazjc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163uehnoyup.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163yormquud.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kwhtnwxx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rlungsns.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163cbqepesh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hdhjacxx.html


<!-- 参考信息 -->