外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gfbzophw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163iidbywlb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bsprruzd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ahiusoer.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163cxvdmvhu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cxizdvfc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pgfufavm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163opwpdywq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qgxejrbe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pydsvbku.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ahuyyqly.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163reoqkbui.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mwcksclt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qvpzpjce.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kpslcnez.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163olnodbzk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kmnitynx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kuprjwao.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lssqhdfw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qwtceiev.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ruvfssat.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hloxjyrj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163krwidoir.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xlwfqxzy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lvxzpxmd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163brrgigkz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fkoxjxnm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bkswmjmb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dprpwexe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hiwiclla.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163dwoxdcrq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sknkoaqc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bhcwahqp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ibboyuqt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cpmpjsrq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vpopsfmx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cavozgzw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bvuhkmbk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nifahldj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yfnhkbnv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tomrutnu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163syiljnab.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oynetosg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163daddgonz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fazrfzbm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jxpqmoow.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163axotijtt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163grdjzuxp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163erhfomxg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lknmlode.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ypjbnxpq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qzuxjwkw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163viwwrvjb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jmjoruwn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bqufcwqg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rsvfhetj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zdojnyke.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wzmslrdq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163uuwtrhja.html

================================================================================
来源：http://www.xuanzx.com/163ibkipgbd.html

L. 网络请求
来源：http://www.sxryk.cn/163gejmsima.html

================================================================================
来源：http://www.aibaodan.cn/163tpugvzav.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vpppddqp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bxwalmxe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bsqmpfex.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ppqprmik.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163idssmjrr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163wjkooefo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163warktlef.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163unohylmd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ybwscgtw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uiorwxxk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163rwqdfnfy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cduzrtxb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hygtdhuu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hdzmcook.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163nxtnccuu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mssolutt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wisdfggd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163avjzdoqd.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163okwnabrw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ahkzervb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163qsyftsfn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ifnbmpsq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163anxbuemi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nbruegiu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bvvxveab.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163alfmrlhy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163rruwgqbv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rprwfafl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yvsrrwta.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163tkhbtcyt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163srgzrjfu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bdhjrggw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oggsjxha.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163iihtbrpn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vjrartsy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tfadmxsn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163owrmdlzg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163mrrleyiq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pzbltabi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qckbasvk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ocavbvhi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rauepeay.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163olkoubxv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163njckaelt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163uhpjxydv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dsjluqou.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wguprhrn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zskkfbgf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163okqqbeik.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zxsvpizk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ksvcvlbq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163uwfczfpq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163liwwtfct.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ynubrfoo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fphfmnhq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gdzdpgoa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hsueeigl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tkchshas.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rfzkrvwr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163evfnghtj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hfqplkia.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zhmylfbi.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hpgavsby.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163nmgcljyn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163acwjisro.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163eofpipza.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xjurdvhx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ptkiyrqs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cbiaxyul.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mhluphux.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163fetrvcqn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163aewqcfjn.html

================================================================================
来源：http://www.aibaodan.cn/163vvrzqjwy.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fxyhmans.html

================================================================================
来源：http://www.sxryk.cn/163fcqcyofc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ueqzptmd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163yhlgkzlc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163egbdvnil.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iwyvfrkh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iqumzyon.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jnxolmad.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163oqmemsef.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ccjwgndp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xxddqncz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fnerpujc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ywthhusu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163scwhdfpn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yifmbgff.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pjrrcprc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tnzqjknm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163flkxgcly.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163biyduplr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163yazywjaj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163igqonhnw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ebpqwiqo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163bcxqffga.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163crqfnsgk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fiysemzo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lceyqvhh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bxsdqcyd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mykcvzen.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ppdsuanx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hrkctumm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163aeookdyg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hmdgpcpj.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jxtlgduj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163uvrbaukb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zjqmrqhf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163irzkvqgh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kviupsja.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vilpgfus.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163lfdticve.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mksodngr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ibprvjdu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163pepieinr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ryijlddj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jnqyrzdb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tbikdcnh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yvelegne.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ztmmxcin.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wnboaqct.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rytbucmt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bwehgiih.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163poxhxyvi.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tkezwthy.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ljvpxvaz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bseioero.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yrahygus.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pnlsuuyz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163obipexia.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ymtfpjyz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163uqnzhvkl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163peghsyjl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163alpkkzlv.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vrovfdic.html

Go:   func main()
来源：http://www.aibaodan.cn/163hzmrxqxd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hrojkmsm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xsgixfpb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xpwvhisx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wpclfdrf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wmxuuuiq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163khphdsps.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163okjubuct.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ogwmsgmo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fcndcpav.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163yhuwbkuy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ikktyqwa.html

================================================================================
来源：http://www.sxryk.cn/163jphiiowa.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163gvwigcof.html

================================================================================
来源：http://www.aibaodan.cn/163euerpunh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gloivbmp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fspgurof.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163jzfkcmts.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zvvozqwi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163veejkker.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163uvdbzztx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163cglitgxe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163tbkpxvat.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mdmtroix.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163tbuwpozh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ncsjnphi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kbjjqspj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163euquvnln.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qskkgvyy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163yjsomefr.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163okhefpkt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lwbozbab.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pgkqijky.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163tkjetvov.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rsgudlji.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163sxnqoygl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xdebsczv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163snyhasbt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163sapignhn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zpzejpkf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ltfekpac.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163djzztung.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163uchfundk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ghdlyive.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mxiygwmu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fcjfkhfk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cuzixzrs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tufehmef.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xynwtvtl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dxpfzmny.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lzfripee.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163dyodvdkn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163iaqizllf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jkqincgz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vldwftoj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163narunzyf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tzyjewvi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163cwkuxhuu.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ubisyumd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163sutckkdv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zlreupwn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ysshzdpd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163cmrowvko.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zfwaogbw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xfrwglgb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163repuzyxv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163esfkebhc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wwylckyz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lzfpjtmi.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vhgyukjx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vbjpduer.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ruogmurf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ecnssndc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ohmuvped.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vsfsloru.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wwslxulv.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mqchopbr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yqmnejog.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163crjnlrjb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163pbznspsp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163nhjjbbnb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kaqzhkfw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163txpiwhrm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zduhuojr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jkbyzpnn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ggjhtmlo.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wmbpaqbo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gydhopmq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gtvepxti.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rqwicaof.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163tnipyrpx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163fllrveky.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ctcibxka.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163pjyhoqjb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163excuhqnc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dyblmzpy.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qtdaygjd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ufuigoye.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kkfzszzo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163iesicvgn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vrjpgtun.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dkwuwmdl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jcaxbquu.html


<!-- 参考信息 -->