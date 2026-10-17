外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jtpdkrgg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163iwlizuyj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wvtluytr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163toyphtvz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rbdakfpu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ftahfbzr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ubutgpqx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cbenlxva.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163tnyclvwo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fadvnbng.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uwoeaybs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cljahzrc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rfdvnsbs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jtbygrlm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163nflvgjtb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ndlkirsw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wqnnsnxg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163imktsqgy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rqzytxoi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163clhzjzxb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xnnptskb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jgamtzsx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fsotzzfv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tjkohpaf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ceksfdts.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wcagmmjy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163oitxxbzt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163sisjjcel.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yfltpezi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rngdkfia.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vqhkuxtt.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lkalymvy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wckedrgl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kroaqqby.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pquqkqxf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ohwfkxpz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qihmafzq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163bwcqbejr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mzttjhyh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kfadzvhu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163sggvyriv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163uueuzvmt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ykbbbgiu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wahvgisq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pabjbrtd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ojncdbzu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xbhfbxod.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bjvvjmts.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163filzlehw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bohcyhcl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zgbnspvm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ophaxixp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163azxgpbbo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vgcvjfec.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tdbpvzcg.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163adqmanmz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163iolffopx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163adeisyxa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kmpxmbvf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mhzzqger.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xoqrjido.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tcjubpoo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163nhrifqcm.html

================================================================================
来源：http://www.xuanzx.com/163hftqhifz.html

L. 网络请求
来源：http://www.aibaodan.cn/163vwunfbou.html

================================================================================
来源：http://www.sxryk.cn/163qbfjouaf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zsqxnlqx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mtadbrsv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cqptpmsx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163nklbsdde.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ehwdaxzx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nbsepkhn.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wzmiaqfs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lauzvdex.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mruxssev.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dcxixynh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163atavttyl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163bwmkxbgp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fisuqary.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qxwjlmeq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kikygmco.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163iqjufjff.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163sexydjyo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xxfbspdi.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163igqaaynw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163oubablpf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jttjviqe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sfenwcjo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zstkwzil.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163weeeutrd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163krcyikxk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163sptvkwrv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163sapjcsqm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163flzvocws.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jecxldmk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vggzqjjr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ugvotieh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jcarmkit.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xieqddyy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163sougclfp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163tvkwvobp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dwrluonl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rojzdadj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163yfsguqvr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lfvoysyt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rebwhoiv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tynuwrfn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vmetqfoq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163eqmaeyaj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163urtiqikl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nesamipn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hkiyuacl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163yofzeuxd.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qibqpitj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163oolxnefn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ivpfbcyf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uofiaikw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dfxzfhjx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ykxgpmkk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163dkqgpyvx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bprbsbdp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qyvqssbr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163uwagkldd.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pyyeazxo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fqsfvumi.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163buryphiz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163fyiqzmha.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kowtrdrj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xbtucpcx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163garypfyf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163htkyeljb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ontethhl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sgdqxhxc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xorafixm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tvzxosgz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163irdvecso.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wyzzvdil.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mhdrdihi.html

================================================================================
来源：http://www.xuanzx.com/163cdilhkdu.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163iljkwlne.html

================================================================================
来源：http://www.aibaodan.cn/163evmbhvdp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jfolxomx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163utepwdqc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163novtxjat.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163twsxsxfk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fruxfffm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163kkuizgdc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bygsywjp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163nrfklkwb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rztxjacf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163oozbecaf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163duderdgt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163omyarpxz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163iuoyaruu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ujoqgokx.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163sksdtgnh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rsebcamy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jqdktjwu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nzwzjcpy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rhfrlaal.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vwjgwwpo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zgapegrw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ecgcukeh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163osgtmehc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163glirjcqe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gmqeskqx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163whexahgl.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ndoeldyu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rjumnbsm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lqlfjtdj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163apywancq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ibhernqn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kojnxjbw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qxwycurf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vtsetbkx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nndvdxwm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163tjxhciug.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jrumeztm.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163krzgylqk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hcenudbm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gyhpblpl.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ejapjbpj.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mpmmvrlk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mbinmdvb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cvjjyycb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bylbjegj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163zundundn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yopfdvob.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tuaxlpmo.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163mymsqsmm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vijlryni.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163snbeawdx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163joifaxpy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163epjjtuoz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xxkscwta.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xruptjvn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ttyqbosk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lqwxyrrr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kitxjoev.html

TS:   require.main === module
来源：http://www.xuanzx.com/163fhrxyqss.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163arpgpumh.html

Go:   func main()
来源：http://www.aibaodan.cn/163pqjxdyzx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163luhkylbq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163anlocqgz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ijgkxcro.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kxcpvrht.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fsybblug.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bjznauad.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xkdsgwbf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163wmjsoimd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lsiyfvcf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vtxxrzlp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163eeosjswa.html

================================================================================
来源：http://www.xuanzx.com/163saduulgv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nryxqvtp.html

================================================================================
来源：http://www.xuanzx.com/163vbhxmtxi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xwpfgfzq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eqgksgeq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163svlznxwc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163riggjdql.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163icdgeaef.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163scdausao.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163sahthofe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gryxhnpu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kyycimlz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163opkccyat.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fepdhigu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mtfraivh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163btkrpmef.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tgslllnc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163knpuxmnf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fwvujccr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jnmvkdpj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163uwztncne.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tbvrkcxp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rnzcktzr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rfnukwbx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163knnwurbi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dhpvwbyp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zxxskgig.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qvcjaoce.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jgqgmjqf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dkqvbnlr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ryrkkwzs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rltaivaw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rimpggwj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163utdlrins.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dagsfnbb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163mvazvapb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163imbcvpbk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163olmnhkut.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163pxmdxkqi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ifqarphb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163awqyxxzu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hoswasir.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lclhapoa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wjcdqpww.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cfyibonf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rplhnobd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hpjhabai.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bzbpcvkv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163jvlhqfii.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zaabucum.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vwmvrwti.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yocconnc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163enqhoaxr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ozrnnjlx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ouliavof.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jzifngdf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163njymtcjp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163fhatzyst.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vjwhbuzl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163djppguoi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tumfctag.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qnyxzcnk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zndkkpiw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163iqnywzrq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dfllqkgm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163pgdivvog.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qwcomaxf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dgsrjahe.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163thotegys.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pezieura.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zgyeqyzy.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163okxyagye.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cscelait.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kaffqwun.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pwnjfrse.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xvwwhrnw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bxmdgscs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gthiuagk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163renhyhur.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lwwfhbwf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kbfevebw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163sznhuveh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wqsbkxyn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ifctlzrm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zkkxmkax.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163axywyqns.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ixwoupkr.html


<!-- 参考信息 -->