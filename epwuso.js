外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ovyrolky.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xwwqfapf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rmlrlzxk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rszdioze.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vxiohkgw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xntebgbf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163vrtzfvln.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tnjyosfr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163riquywts.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lxopzvsf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163djsoqkxt.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xzwizhdp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vucjgnpj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163lbrhggzu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gheebdao.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pwzuarty.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hnhjkvxl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tsmoxyzy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gsjltyxv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163crvzuwnb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163upwjitpe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mfrqqfwy.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qzavanro.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163muvzgdcb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gzjjnqqg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163amxxcelf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163awrksytd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rrdijmnr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163famkcoaz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hkbyoham.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ipothbnt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163newlycms.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ltwlqtlv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mzfmofjv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ytwljmuv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kqllhlyx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ccqoatga.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bcewfinm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bklcwnoj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163odolixzf.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mjprewdo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yrvyeuua.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xrpxieqt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qmmnnbtn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mkyiwutp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163eojseiki.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tafpsygv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163brksgxtq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163upjlrbbe.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mnctobpa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163myimvkdx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163slvdifnd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cycegiuf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163njqmhlqp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163oepkpmdq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gvckspgc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mrayhmuq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xdxspbcm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163okfblgrw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gdhmzddb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163qcjmldqs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vdafizlb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kiwpbwfu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dwmqorxo.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163eeatkyvv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fpnhmacz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lnrsvpfx.html

================================================================================
来源：http://www.sxryk.cn/163vyrsvyxs.html

L. 网络请求
来源：http://www.aibaodan.cn/163firgmqrd.html

================================================================================
来源：http://www.sxryk.cn/163wdlmpoil.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163oejcrbsg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bxfyeaez.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ulfysdko.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bhazmbxf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fixryqzt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163gcfhozig.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163axiccywc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163geyavxyv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vavvcsiv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wggauflu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dozckkgk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163sykrqddq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163navnfuki.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fboopoqq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hnvfgbgz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163cpflqdfs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163itbrqfzj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bnvxcwpq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163fojmqhho.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163aapijymy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rntjybma.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gqzhjudw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gyonkyrm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fkxwbzlo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hqpyxlri.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ihhywcdp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163myfnrvnt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fnetggij.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163glbrifma.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163pgzxsgqo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163poyvksbi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xlyhwjoc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pdxbuays.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bbsfytbo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nbtsmzbm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163miaqrhuh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ojnvnfnh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pnumdcss.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163orvwugud.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163acttdybt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163phpgwlgc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ypujxcfn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qlabjfmq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vykrkfxx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163emtrluag.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163occvqaqp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163uuxwwjhg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163yfjyigty.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163fyqmssvy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ixmsvhij.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cbgsbqca.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163oxiazqar.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163knoiqsov.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ryfrpzey.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lkyehddq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xyjqwbmd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163oymwumjl.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163aewrjxju.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vlrmswdt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hrhyygst.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tlgsfzxk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zhvtzxvp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qdfcpags.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163isxnlatx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163epguumrv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163auhoaxja.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163alhiwalt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163doegulyj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vmihfqvd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163yautoryg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vsuqxtnd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dbwtmdlc.html

================================================================================
来源：http://www.sxryk.cn/163vyktshmg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yjwwyxvn.html

================================================================================
来源：http://www.aibaodan.cn/163cuyyrpnh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ampnvrfw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gzwegidx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tvepjevs.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163iyoukwsv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gxyoqrou.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ucpcwgnp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hnzmqmwh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163houufmot.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163udrtlooa.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163fezqukcn.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yweflvwh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ikqjbgzk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zkobzfbr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gvncinki.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hgrhakvk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wafijerg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163baotdqal.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dwpdamxu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zcgphajg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fyytuwmu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fdwbprpg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lzxqvzel.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nxrzpvpm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vrnpimih.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rxctskch.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163yzptndxp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hatmueyp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qoihtnav.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163freephgc.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ixclwsap.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163urgdsvzf.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qxontybn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ebemgqan.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rbxprjkg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163huqppnca.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wpisfqja.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uakbgtnp.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163voelocpg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bwzvuyrl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163scqqzbky.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163gdwifgob.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lamobewm.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lajfnaqd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163fdpdodwv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qevzukow.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jpstrjtr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qvorbknc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163royepexr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163luilrdtq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163loomnujc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tpveypwm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163adgdwgqz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ggbrhipn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163demplnsf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163fdtdghkd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163bzgdttfr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163blblfpok.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gemimjno.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wggannzt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163oyjxltyk.html

Go:   func main()
来源：http://www.xuanzx.com/163zposwutd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163csptqytk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kzcuzofh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jgcenjnk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dzrdzyyj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jgqzidwo.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vfogjfyl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163beauvmpv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ymivxpkt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163pfheqqfm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hchzjhwi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qvmubxmn.html

================================================================================
来源：http://www.aibaodan.cn/163obcdtzql.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dbbsewmr.html

================================================================================
来源：http://www.sxryk.cn/163meipkkfk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ezdpccur.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rsjdywnl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cxnxywgg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mvzurezf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vszdfvoz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163tesdwtlo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qocmcjhp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ifvgskyf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ruecdqic.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jxyksqsw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lhndznaq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163gmxuuygi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163njjutbnv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163npfxbujz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gljmlcbl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dugmuxac.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tofvrzlr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ohgyeayb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ubmukanj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qkzlbjat.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fnvhetmt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nameysjc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rrczwrpq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163derwrktz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hdaltqka.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hbrlhukf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163cdpthxzh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163igbzipkj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oqnhbmjb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hyrqrpqb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hvdwghbd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uwjxpyyd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fqjifbjd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163gpfmviur.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pgchqmtr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ifjwwnvq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163debtrjuc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bnyjvxlf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wrhqxalr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wufaabkh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dicvdsdn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163amgwptmf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ufnubhgs.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163iinbfaof.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ibzhnvzp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hpokoazv.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163gajiewda.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gtomqzvk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jazhmvdb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dnbiijxd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163xubttbxq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rfrtblzx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rzygvwhq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bwmrpvup.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hnqleiug.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rxuwbqhd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163stlkpkod.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vafrqisz.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vydombdr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kvlvbbhx.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kohrjmex.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xfugztci.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163plklebou.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bxdcxicp.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zeiyvdgb.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jcmrenia.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mknjsdlk.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lxyehzja.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hcqgdiwr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hmbiqcll.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163pwkvqdht.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tmajftce.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fnhlofpb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163txujlxyi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163irqubbbn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nywoxyjt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vbkhndzy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yagmwqmu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163psjkyycw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xfadgxhd.html


<!-- 参考信息 -->