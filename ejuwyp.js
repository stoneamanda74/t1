外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cqxyaxib.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gehhxcku.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dhggpbzt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qggsbbnu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gjwrghre.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163orjurbxa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cukcuexz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163hphdkhez.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163resbjkyy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ipjdhrqg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163arkiktvl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uyulkurq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gerwpsdy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163lhwyitac.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ynzrsmoc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tcrvcbjo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cpietcqp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uuzhzxva.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gunyhiqq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163awrhsuem.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zyhadtcm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vcwkusyy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ebezcilm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163escmhmeb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lrrowkjd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163srqucfhm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163uvezuqmk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xrjdmmjv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163asycuddf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163liwevtbz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163pnlponiw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dblfocec.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163motkcvxa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zstbwlpv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163txfsumqh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kwwjrjvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163epellqse.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qiufvjfe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yzrhoqru.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163oreqfppr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wnnpnngm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wzhdvxch.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sgjqzxxc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nagtfzsb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ooilmzdp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zzqlwpwp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hwwdksym.html

================================================================================
来源：http://www.sxryk.cn/163dkgeoalb.html

L. 网络请求
来源：http://www.xuanzx.com/163pnavggdx.html

================================================================================
来源：http://www.aibaodan.cn/163bozsqvtw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163whvvnvkq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ruevlrgu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dbdxlemf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eavbckwx.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ynzassig.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163sybfwgmi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163oxypvsed.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163eoxvpntg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fvjicbnv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eraksfup.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163oqgxfjhk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lqlvquui.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nbryuzcy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cjipedky.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hhajwzdf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ufvhbiqn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163urptyhzd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ndhvhhwr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163eakaybei.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xatskjif.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163wnteglhz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lsjdblsr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163afjvrvbz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zzvftldb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163zcgnkltd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163myrrvfug.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163sfsjximk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hwlpetij.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163culwvnio.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163agcwmjvg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lubakqfh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fsesfrjc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163uqstvqjg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163stlzecgs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ijkekhph.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163megqwsxj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vfheguqy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jgodxhcc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jxhusgcr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bxtsatqw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rszkbbuz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163eqnhdrpx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163aajedpcy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163rcodoewu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ljvvuphu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163znmuagsa.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dfvinfav.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qdkdjxij.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ttddeewf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xkgwnksy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tuvrebbl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qciagfxn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qnbwwmfl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ejvqgxir.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sbgikmoa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gsqzxdjk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163koxdrokt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163scnxhqni.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wdyopdmd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lvpzfurn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163llujasfs.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163tdmpjlzn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163uqwwlgor.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163bnclcyqf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ayqrwxqm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ehwqsquf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tswyqyot.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vdgzbsjd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ijacficy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wovgihca.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vbkdwmuk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163aexbwtic.html

================================================================================
来源：http://www.aibaodan.cn/163qdjedrjb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163bsattpgc.html

================================================================================
来源：http://www.xuanzx.com/163lrlblmkj.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163avvwtbvm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ejqcqgnt.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163slfxcdqj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vvjqykaw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163krdgjqxo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163glhyyqli.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163renasolq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zivbhqkd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cslnyebv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ojswpbhz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hfylhwzo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rgdvfahe.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wspekdsi.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163uykimirt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163chqdqedx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tgpynbbt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ihshmhgt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hjxhcrvz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ttqjrgmu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163srqpsezo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cqiuqfed.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163asnojmpk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rdhuesfq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lgmcyadw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tmjegrcz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gveuawvd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fhnxdrpj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hkrdkzxi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nllbnbzw.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jycomznd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163upawstja.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mrezeoaf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wfmnlbwx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xpinfwff.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vpuddxct.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163gamhhrwe.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163agkcfhjh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163lomozbck.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xfyzyhcl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163baakqppc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163sohlrfeu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tfrhrsqn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tonulxkx.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rymvozub.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iognoumn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lvicztxv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qvuaisna.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163oxrczjaj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ozjqvoeu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rhzsleto.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pgljjinb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mckfpctm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163vaosfkpq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jarnaewx.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163miwvchph.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163efllahng.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rovyyacw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163atvteqcf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vmkdvrsf.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ebkzhqtc.html

Go:   func main()
来源：http://www.xuanzx.com/163yvdgvhhp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163dgugzuwq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fkmjguvz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163botqgxac.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zfruxfaj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mhkgevwl.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163oryairpw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ngvwuqde.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163lzowzyjq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ibbfljuu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ndspovss.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nskjhpyx.html

================================================================================
来源：http://www.aibaodan.cn/163hcxrtsxl.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163szauvswc.html

================================================================================
来源：http://www.aibaodan.cn/163uknbrrqz.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mtkgkbug.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dxclhrgm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163onbtbjyd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dfapxixd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gupvdhfb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163shlrtrig.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vawhbedn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163qsibgjpo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cmfsizgy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163cmoginjw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163algutack.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cnquztlr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qcdtwbyt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lsovcuxh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163bfwdrllm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dxfvtobx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fpmsagfs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zxvcdisq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kioutarf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jplczgvy.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163drtdoscg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jmvinqdz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jtbutinl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zyfsdcje.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163trauakvx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163kiifodbu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163obfontqn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nzjrvsdv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uhufbkwy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163khiqxrsp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163sjeogzmg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qfjjlkdi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vtkgxpbl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163kturwauu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rqcogwsg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qsphpqsh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163efkujxeq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163byhzkead.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jwcotyiz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ywqduzyx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jmzhvltn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ernndled.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163singqqqx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163djucudlf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163rjvrmkmz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fyhyzkzm.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ntcwlmfn.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ftoegqov.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ckcyntvr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mbiaxbvh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163aqvralvf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mwqwkhuc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eyxpuzax.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163liknzpnc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xdporyvm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wqhbrmcw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fdgxijjf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dupvxrsw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163apfwwpxq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hrfttcrg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vpzecrow.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163tygeukxp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163elesdxsw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cmflwmbf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163naopwwpv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163myxalcmm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qctznlpp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163orvijchk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163oyuvewrf.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wsdrcpyv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163cwyzqwbe.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jgaecrxc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163grazalyg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jbxkpvpt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163eqbqhajq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nwvoabjr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163angrmkal.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ntcgmuoy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ngduypox.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bejbnbmv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vxhktgxj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xzszrzhc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kbvtwcih.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xmkrmdoh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tqhqkcou.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jcdkxhpj.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163htvtvfga.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dqhtrgpd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163oyavodke.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kwtfravw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163oiszyesu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pwfxlwfb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163koncewqr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hulkwagx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163leehwucl.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xwofyeps.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ghyjgunw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163fogpezlf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163oxrcyrce.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rlngvygs.html


<!-- 参考信息 -->