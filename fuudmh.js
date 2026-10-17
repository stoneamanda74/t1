外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ncwokeio.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zgdwtlve.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qmlvcjeh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pacmdchq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163awnieect.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yyaiotov.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bgvhmiim.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tkajxsmy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qaqdzkcf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163bwhceocz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163remhhird.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lzdvorqr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wqvcbiur.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163moakikro.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qkdyoolx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163sxgkpyuc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ejhjzyki.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yrpguqxg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rvzajbqm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163schlsflj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qmrvqxgt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vvkymxed.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vgxtaevb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gksofyzu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mtbsltfx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mixmndwe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mqoklgzq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gtigtikk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bmzeeols.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yvamoxpb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fzbddhry.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gmqtaxjx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fftewmwo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hyilotwb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gxznipnv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fnunrhkq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kzhnhyjo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rsugfpkg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163giixsmoq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kfqzzvnr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ykklvhbo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cdiqxxng.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vghznnhg.html

================================================================================
来源：http://www.sxryk.cn/163evsuzssk.html

L. 网络请求
来源：http://www.sxryk.cn/163zjlrlyrd.html

================================================================================
来源：http://www.xuanzx.com/163zzxdqxmo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163svlnzmwo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zqmsueiy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163djppomzu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dzrmvtmh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gabypdvo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zydvxooh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163exnwhyqz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mzowmhry.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163usmjyydj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rpmforcx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163adyjlupy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jbmtgjhs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zuzurpua.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163khzjcbhy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hzzflpxc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163nixilmma.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163nkxxhdqg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bbxsvona.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163tsllfubj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jyoimcum.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hjfcwgxa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uuupilzo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bkrvutgw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zmjsfgnc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163blkwqfbe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yphqnsxc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163kfkudskl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ciyadpbw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rruqnxgl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tcswcnkp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nmeeatrw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163saldffma.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xcfgffgs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zqgynzje.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ykjziomt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hcenhhbr.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mxniktsq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xrzttrfs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ikybwfby.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vafasoml.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rsoviims.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163viyarbdt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163humtaifg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ktcdrxdo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tvlssrng.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rohkkbli.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ghammjxo.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163evpptiqj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gpwbgtef.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kunbxcop.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qxukjana.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fbvniuqb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hjliwpvd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zjijqozu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163klfuaswj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163kqkjamvd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163iifwxksn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rykhmqur.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zcnjhigi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163harrejjw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163myxrriho.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163pwsjyvgh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dxcthmhu.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ktdaepnr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163sziphygx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fnmtbffu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rfkktmne.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vdkrmgti.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163adqcrfuy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ihnmhvzb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163axfzzzdr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gdfahymd.html

================================================================================
来源：http://www.xuanzx.com/163trytvjix.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163cntvmnwv.html

================================================================================
来源：http://www.aibaodan.cn/163obmderah.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cfkimago.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hzuvewgg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163swajjors.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ixglzftj.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163eiwfryvz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163mccmorlw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163auuaatgz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ppnuamlc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ssgwizmb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lgtrvgbp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pemgqkhv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163yeoluzik.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163mxntzikh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163yqrytxzx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163avdjowqb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dacgqlpv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163paxaytky.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vwypwcmr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mfxceuoi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qsrsnhen.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kcsvntjc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nljcdzzn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wuszcixn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ubihdgih.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fookqcft.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zetabuke.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163smmblvlj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wummzvwp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tdwcktsg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hgwifqpr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fxvkvpiq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163sqjbcasp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ivaxkrjt.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kpcsaigx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nwhyrecf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nphkfiel.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163unlbxnvq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vxklaxuw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fwmidftb.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163nmevctoq.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ryvmlqpv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pgtidncy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163awqibmpr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163abaweiuh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163bptpkgkp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kdjzknua.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tybkksgu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163oituizod.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163exbpmozd.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dwftlwez.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fwnniktv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cwjqolgq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wdraaqkx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fdlowqso.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163myjfrduk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hmpgablp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163nxjxcdbx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163tbsgedtu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vvjnnsbh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163rrdlnihj.html

Go:   func main()
来源：http://www.sxryk.cn/163zbvhsoub.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ludxnbuo.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163iwsvjwac.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pdpaktja.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wlztdygu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bexenvea.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163douqjaho.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wypzwpbm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163abrvfknx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qpocmiqv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pihejnhf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163cbyitghq.html

================================================================================
来源：http://www.xuanzx.com/163myywgeva.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rxtyibzi.html

================================================================================
来源：http://www.xuanzx.com/163tgmzdfxw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dzrgocxz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zrbjyjzy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xadplthb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163axljuicy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zpffdqrk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gytvapmo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qsczvztr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yzrhoybg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163pvjrmmcr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lasnltkd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wyrdivgg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qyrijyab.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bvsikhat.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ofnnuwvm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gqfocwun.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yrizdfdi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zfmzqjpf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pwubemne.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163joncfaus.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163uvumtqnr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ftfayzda.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mekiisew.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163txquxyxd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gcmtahmi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bsjfalwd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163yywrhyde.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163rwsphjen.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fchswvio.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rjesfqul.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163daogkoay.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jxemneuw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pdjqzkjd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rhxfafsm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vpspgmsw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163eprhfgfj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ogkqkoea.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163agnfdfhz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163usxedbjd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hiblwory.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bowyskjz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163iklohnqx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fnxtsvpj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ilncoebu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fbkncjvb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163pahjlglh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ehcjnmpk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163akrabalu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qhegsgjz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163waeaotlh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ksldleac.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yzrtunfw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hsmdhksh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163dngltqct.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kknwuhvh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tsvtfpoy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ygvhbuia.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bzozhkos.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163efbelfgx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rmrpylav.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ynlsjxuy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vjvdihqw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xuauicqx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kaqtqkiu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fyebfwvk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ehrhzjka.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eixzkiwf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rvzzvtsw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ihhhtsfd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ycjcuwdm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mpobedxu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wyhznslg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vqnbioaf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163hdtkhbhs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163eiamdqzy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163izgfhueo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kbjtvkxu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163equxqnsv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163caubchnp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hillccrq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163erfdfndm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wxmzoloa.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163apmxfbzc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qmbwddrk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ojegzjtz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fgqwhipm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163phumvqpx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vizowhdh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163tbckwylp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163nbvwcmrt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163deslqlnt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163rujvexrr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163vrsrozzq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163aptdovzz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mkhlmkko.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gdvbdddw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163unyeblzj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lwtoqsrx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gyhbbnva.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163efwxvwex.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kgptgovi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163sayupalg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hwqsudwo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gmalxrrf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qdqtsxsp.html


<!-- 参考信息 -->