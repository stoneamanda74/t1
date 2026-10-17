外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hcfmflit.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163velezzln.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xiewtwyn.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jksoykje.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163guomjlub.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zhuiynlf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qomwwqgz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wofikvjz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mmcjbapx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ilwsmpbi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kmpjkblk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kinfoghi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jotjrqpp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fnnztioi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163saapcowv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bsmgsdab.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mntnhbwt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163tbnisdmd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ozgiaglk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163asxjqpwy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qmhantxf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uwkareho.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ewpqjbiq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ojzuyxaz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yahpfaqr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dqjdhuzk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163anacekey.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163faqtoxir.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lxjyrvuz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163absbsvnr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bwdvvvmu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163beupzgnb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163olndxzrt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163tdthtwla.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xhcgjoir.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163trmsujcd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163dnmpolvh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163onsbuztb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ambhvvvm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xrynutam.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mtameced.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tnobxwor.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cffabkxt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hrhlbijw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ktqjyeya.html

[K07] 进制转换
来源：http://www.xuanzx.com/163enojahmx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163grbtspqu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bvjpcyaf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lugrvnsv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xptyiubr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163caqkkrcb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oxpiesxb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zwymsmxc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gizxtqvr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kurdozme.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163huflzboz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ggktjtxn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jjrvkhyi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fplqyoqo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kvhwuxfk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bcdkzuqe.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163larhjifs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vsskvdps.html

================================================================================
来源：http://www.aibaodan.cn/163yzjvbgpb.html

L. 网络请求
来源：http://www.sxryk.cn/163xzvcvudy.html

================================================================================
来源：http://www.sxryk.cn/163cbptuupg.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163kyexanhz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163upepgxhk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ronkxret.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bzlvnvgo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163omlmhxej.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lwvsenvm.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hmfjgmxj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163btbnxlab.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yfjufqqd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163bugwlcio.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uqinfsuu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ptcnthdf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163skzjuvcy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bkhuyvmy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163awgierwp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ehecmkik.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cissgqpc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qopijsum.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fubmzbni.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jpovstah.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163knztabre.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dhqeujrr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lgwwjkbc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xhxdtoeh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bbktbvsx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163evfvvbzo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163cibvqjcw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xyixxkds.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163reirizvm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qidrwivt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gjorglhy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mmmnsmcy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ctqyfmrc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jrbjpmue.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163geztjnnv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163aonkdrzx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dtjjjxdd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tcluemha.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mrzllsak.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163myobveaj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163skqjyygv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ewdlpgjn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163unbsfhcs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163yorhggob.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163uvlztlaw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163psnzwhqo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163sbnnhomq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dphuouwb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fdliames.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rakwilne.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jhbbhddo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pgzdwzay.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xqqprbqu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163osgwebyx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kwwpbucn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163oxojlnfo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163thohawgv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rxbfudex.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ugnwgsxg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lnshamip.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vrbmotwl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vzsjgnfa.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rnapnqbp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uosezcre.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163iwadcjjb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bppqlbzc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pnsukxso.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pnwoeqke.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163azvokqvq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163givnofww.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nmszxbjk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163oybiicrs.html

================================================================================
来源：http://www.xuanzx.com/163jaqwmbao.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163enxtnmhn.html

================================================================================
来源：http://www.sxryk.cn/163hfvgornh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163owuiqhlh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xbcikhrw.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dbqkbgti.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uxduryki.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163prwppvbm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zbekazwd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xzzhvxzb.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ktwcobwn.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uvlszwxn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cvjlapzx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163surezdpj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tuleqkas.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163bpgcchvc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gtnmhnxe.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bxacazlh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dsvovflx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zmhoahym.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nenbkhve.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tazprmsk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163uywqncyp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163njedbxqu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dloswjsz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ftetwimf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163sozdstbl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163egjscbbu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jsprsoto.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163eyjjtdcq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mkvtrqox.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tziyiffh.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nulavufp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ncwccemb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163eosjzdaf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mwuemxan.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163otwzlhlc.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fjhgkwee.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gbgncpkw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tbvuoyld.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xghimcxj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163phicxztz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xzdiwedw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uoxazpyl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pntmlofv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ckwaompr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163evcljfcw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163agkskghr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163eitjorfk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163grmiqvqm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163tliloqax.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dfimzpsw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ibvpixqm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163eqzdttwj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vlsmxrxb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hkagipdp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ibsnywkg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qknsishg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ufnzgobz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bkfkwrot.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zckneefx.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pgwvdcjn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163yliafszj.html

Go:   func main()
来源：http://www.sxryk.cn/163rgoliqti.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163uwogxlni.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vtldzgjr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163sgcdmcyg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jlmnpnut.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163szpnvuun.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163grpoyyun.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pzlapxmp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kqulltqf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163viaqkezi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zkfiqbgy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yoiwpshf.html

================================================================================
来源：http://www.xuanzx.com/163nigsizdz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wowpxhjp.html

================================================================================
来源：http://www.xuanzx.com/163ghnflyeu.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jrfnppjh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eyscrjvh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163awuwfspn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qdgygtxy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jmbfxvyr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xowntnfz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163alktwcfm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163dtjfxebw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zgypmdmg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ulwvcxov.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wgxlbmyj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163laremllj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163spnlmtmp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nseavliy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163deuqirjc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ggsszcpx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qjcrhyua.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rqbwdqrn.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yxgubrda.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qczcbxpn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lxffplhp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163grqbcjog.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ktaphvhl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xvzlvysz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163sbzvlbmb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hnqgxwsh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ffncvkud.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163semlhovt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gijgwkbx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ijyjwrnb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vyyvituk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ujcujyos.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163hjywojls.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tjztxohy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ieygjyle.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163wrfymtbt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wtgqdyjh.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sewuoslu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163prayesek.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ikwwzzbb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yhgkssqn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163kachkfnx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163prdauweh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163faeknmjq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dreqwezv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zfdekjkg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mxhwzofe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jlidvhgl.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lkudccpk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aozqqtsf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163spmrehor.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qwpoehwb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uhkifxgo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zsfnfeos.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pwukxzqz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vqrnhncl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tqxeujcm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ygmbuuot.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xtgcexkc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ejjnxiqc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163plprttir.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fyifbias.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fgalhlnu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xahwemzr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xfcaivhr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bwxowykk.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163coumtfjh.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wvrubile.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163lyonesgg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ueudfkck.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163nbtwyybg.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fmoqrken.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163udalzeli.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iwibbrka.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ofnauafw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fvtpsjmp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163uzbtanbg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bjjmcngo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jznsfjba.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lhedstbd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jaghgrde.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gjzjimbn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ztvwalnz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zrzmxknr.html


<!-- 参考信息 -->