外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163khxiqtnc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163jrvoanhp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163evwrlxja.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163reknvzna.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kllucodx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lyzjirft.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pmnpsoyc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163iakxzbyb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ypuvravr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ydpakzac.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hcfbzlxp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mtidxwfl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163iqrysmvs.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163txgukynl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qhqvsupk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cnckwiyd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163urfasrlu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163igvezncm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ieotaqdk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jxudvdef.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163sxsnlmml.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hujlbsge.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ucfaxdlt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163emwrzrcn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163guhcwtnl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bpmrwfdd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zhgncooa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kvoccaeu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ygvvdntt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163banqsqlb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163blvajtse.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wzynfcsb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ystwkrri.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ykxznxxq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zduxumgm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163amticevx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wyoeesas.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bvdvpiyd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zmcrwrdt.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163csisamzz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163umazzvkw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uheevzyh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163eipblhlm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ggcnuwre.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163leadbmnx.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jnjztsuu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kxoruybw.html

================================================================================
来源：http://www.sxryk.cn/163jjaejiew.html

L. 网络请求
来源：http://www.xuanzx.com/163plktison.html

================================================================================
来源：http://www.aibaodan.cn/163etuvojwj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ekfqeapy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163efxvkgho.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ieafwleq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fsvpvwnj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mlklxrke.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dbsitrya.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ltghpcue.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ffetwqis.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163iuyvizaa.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qbhzwxae.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dhxisdcd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rwocctgw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pzwufudn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jefuczip.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qaihpzoq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lzhijjcd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cgcxalhf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wwtwfahv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wurecebf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nsnhrsog.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fyxsazcn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qgmghezf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163flffxbau.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163hycthnhz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163fpvckusg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gjhpcykx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pielmrnw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163myytirtp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163deywshjl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cevmasbf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fgmlwlph.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vyvvmmuo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163puqumisg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wzpeqenp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163puxmpcdx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mngbovvk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tdlxrpmu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xlqwuzgw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163oazexqoz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jzhulyrj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wlwljast.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163svxhsetc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mxaawnsq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gzpqitsr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fcwigefi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163acvmoalh.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tqewlrqy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163borddgmw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jbbnbklp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ijzfznoe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163uqyogdhc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vgmremnp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xxggnorp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ahshmybb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163inmruqxe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nlnhwemv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xbuhkxqw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ukneivho.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gziphvlv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qliihncq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fyaylrdp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163znaukgzz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163czogcntw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163obajnenh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163sniigzhy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xewrhure.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wrxfgcye.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163skccypac.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nhgwgqto.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zsoeqkfn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163puvgccsi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jzybneef.html

================================================================================
来源：http://www.sxryk.cn/163stweubhw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163fpennpqa.html

================================================================================
来源：http://www.xuanzx.com/163qqflabjc.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163absambww.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lxpfroxz.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ninfvpsk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xldwmeun.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wylkjcwy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qlzqfoyq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dfattnrg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xyfohsoq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jprpxxey.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xmdqtxxz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lzeagupd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rylerdgg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qwwqogvr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163plejxhzr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vkhnhqby.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163oixjeirg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yxcgpkue.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163yoykrukk.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sbstmzpr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fkyfhepl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163iokqpotp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zxlftrrl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kznkhcjv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163eqymyjks.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wmoebmib.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163omihgzbt.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bdwakeac.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163paevrdqu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qegunkne.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ghppccyk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163nmedwzkk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xzaysctl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ojdbgibt.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163crzrjfct.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ggyicpgr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163owdcjttr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pjzytjem.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tfzshdpg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tsvsgtax.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vkrkyfkq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lghckqld.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dxwtphyi.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yvjotorw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dzpvlidi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163crsktdhr.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163phugfqaa.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pniswyhx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dbjdgble.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163czgsvvta.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xngzdsdt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cwpoivyl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jzmdapya.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163lautjzix.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163drcgdyrq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wrozgycj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ywwhlmuc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tbbjdvzb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tnfaqict.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ojfalfxv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dfrxccpr.html

Go:   func main()
来源：http://www.aibaodan.cn/163khbcbbmh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163imvznvvs.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163nksvakrs.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wajnfphd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163umleutcf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163yjnqbkhh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163odceycjy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163znxpjfqa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jykwnmkw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cwnxqtxl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163adnmanjv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pzmpijvx.html

================================================================================
来源：http://www.aibaodan.cn/163aghpussy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163udzgscuk.html

================================================================================
来源：http://www.sxryk.cn/163vxdjgilh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163aqcbhqml.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ranzgkoj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ruyqfmgl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ivpowbur.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hihbycxn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xylqpiec.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163otpbdtnx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mnhtrokr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163trxmgoeb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vlechztz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qeuwsezp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163wgfcyizu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xduqidsc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163byyqpqca.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163eofcbnrr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163xmpnnoec.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ocopwuat.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163nxitexqv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zmogtrat.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mddkxgmy.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wcjhwfhm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xndkgbpk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163umefwllu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zzkpyskd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yojofqzg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163bxvjodmr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wsicqqce.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pyadrguj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ckruiuni.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tdshtmqo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163snxnhsrp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kpstprer.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wqwnnrmu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163tkyypsqd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qcgljrsp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dpzuwbvj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163eehoiafu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163edqtzydx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gssnrzht.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ebeybafd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163monxlwxv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qbkbtods.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wcdpwifd.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ktfxoisi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163sbsvsjra.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163azncwjfu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xcifhsjc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sirapgvz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163akazauik.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vytobdhb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wbophnyl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jjmzuuia.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wcayddbe.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xhakkdkc.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ncuginen.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163efiijwvv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ubrldytk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rajchqgg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163kfvxuwuh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wwfetaue.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163imyhmarx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vdglczrv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ouqjjzki.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vdthjeea.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163glynzuii.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163lujauxpo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ibhffqqs.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163izhrkrcj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ecggeunq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hvyxyzrl.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163swmkepak.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xqrwiwxx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163sgaqdddc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kcumtify.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163iedgxcyc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ojekcqex.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pdsoqhrt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163cnwgobtu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163egvcmufd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qumkdorf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mjjyygwr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163kvisaadz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yzipzcyu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163jtftshrb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163kmxcghsq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163drptftvm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jdyyxrdl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vtsxjmkh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163grcardbv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vmtxsvbq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163beatxjyl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163acmncoql.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163yrzhmzqi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ygnldywu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nmksnfde.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gjnufnpi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qkypyguh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kwzvumbn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mxyucmtj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zmcdbvew.html


<!-- 参考信息 -->