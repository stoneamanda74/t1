外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163czkrbpzx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lsvkizpl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vonppfjk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163duirgmoi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zpgoeasr.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ocqrntwd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fnvnatyl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dnafajqs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163kxfpqiyu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vfeqdhlz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mmrwzrwz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163oyxbrnan.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mvhjmgns.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qcwlbroa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ycmdedlf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lzfcobql.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pshhcczy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163kygrgwpx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qfycrlqa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yipltmvr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163wfxnezrc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zltffvzv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ngvwjxwe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bwrlulum.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jrobqhrc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nbcutgyi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zjcupary.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163skmqhmup.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163glgdirpx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gykwpfnp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ipqrmsgz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yuxirxzf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bcwdyjft.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ebvhivfd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ayzzlnez.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jjiwarrg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163oaotwmvm.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yrukcgqh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nsmlbuju.html

================================================================================
来源：http://www.sxryk.cn/163uwmvrtgs.html

L. 网络请求
来源：http://www.xuanzx.com/163gnmqurdk.html

================================================================================
来源：http://www.sxryk.cn/163udgxjvsa.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163voywrfbn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gmfspggp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uwqjmazb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hjjnhpyb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dzpphqba.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lxtpcwlw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ozzrlysp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xcovkhmq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lnahgqgs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kufwkfee.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163uiuphhnk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wgzpcoek.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163raivzhad.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kbipglmv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nzpowaqr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fdkzummb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ekczglvr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hewmefiy.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gusinjhe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pcuzjzqw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163utrqggqt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163avbhwgan.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ifxfguyf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mekrhsbd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163abkqefxx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jtghzahs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mbgnxyzm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uqnxjgxw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163eilhsbjx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rcznaekw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vlhcgqnn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ngwhsmkm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ubjrqrrm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ungojbym.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ajftxhnb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163tiphbsnq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fwjujytz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ceytkbsa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163thschscm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163roioosjb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zcysfcit.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kqtjznkj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hmvsppks.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163llamabbn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ssqbdhkk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hwouyplm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163advevkiq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gbflkpro.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lysbmvkh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uinqkprn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163oiwolqru.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163exyrdyte.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tefodhuu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ytcazifp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cqdagziq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163blxtzrun.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wxhwrwqd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cwmyssec.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ycbyqagn.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ochvefhq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163trhhsrey.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lrfdfkyz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bdjadkvy.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rcaoxsgt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163azczkvwf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163aeggjxcl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fqwznvoc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bhbzofyn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163cisvjtwz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163akcqgcjv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ygulnrbe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gizgjzqw.html

================================================================================
来源：http://www.sxryk.cn/163eobwmhnk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163utadmadd.html

================================================================================
来源：http://www.aibaodan.cn/163eyojwvou.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163tbrqzoxv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163aqzegdhq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hrrmqloa.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163azhmelju.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tessyrnd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tclxxtlp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163iosksygb.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vgmrxgih.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163qfvhhrhg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vileqbkd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dilkczlt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xzryauvu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ubmiwwjl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tqtxmikw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163eejayojj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cqwesiof.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bbufcebt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163kdftywkj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bnvmxuhm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fyiwcyct.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163tmwduyve.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lmyrxxrq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pxqxtsvv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lwgjehqb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163rfzkpmaq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163uprvproy.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zypuurud.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163scbubliu.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163eovipsxs.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163luzrocej.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163notjvcvv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jvxgrumc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sbabtkpg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mhybvesu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163pkfpkmuv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163viyvqlkx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163svqylaad.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qkrbnfzu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163akzvydya.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ecwwttwt.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wesbpjme.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ndasgngd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163emstkvdf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xqcsbbgh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zstqdbho.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ivrhsqvx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yzztrlvq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163unwycbml.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fasmwikz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163oklrhpyp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ovqvovlt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vgchoydg.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xszzepoj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163veadwtdq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vbumjapg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rqxqrrfk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163arntgnqv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163povwnrme.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xveuctwc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163exjzehgc.html

Go:   func main()
来源：http://www.aibaodan.cn/163qtptpxeo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jqoobrlq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163okbvzrbb.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163whsrruta.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163xzioiuxm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dhzxskgy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ipuxkckk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wlxqlnga.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gucpgfrk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hwwyyyib.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163acvryljs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kyicdqqy.html

================================================================================
来源：http://www.aibaodan.cn/163tktbxgna.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tqkyglht.html

================================================================================
来源：http://www.aibaodan.cn/163kcnmwhby.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pkmtfotk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qmjkndtw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bdhvfaya.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163syclcrne.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qosapgce.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bdfdfkjy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163sfpyjcpx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163iabliumf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hmhhvcpc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lkcvwpup.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dreeyzwy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163npjnwpdi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ltryofap.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163egjtyxgq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ivineccq.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fjpysmnk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mdszdbyq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rrhrwbiw.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uqoxjfha.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wuojxqdc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wedzaeur.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163adubeauq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fpswgkcl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vslnilyk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vmefhecb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ukhatlkr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bxjawivn.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zwnylcek.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tavddqfi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bfinymtc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cisunzsh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gzzcfpdo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163zcvgcazv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163gvtrumhi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ofsinohr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dbcvdpgf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zaadygti.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fgooimyp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nrlfucxq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cqhtplly.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163siaqfeyz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ewavzvla.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163znkvrfzc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qzeqsytv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ufwtydsa.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163uduxpbsi.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nqdhmyeg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zzuxivvk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nkpvyura.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ejikcbqw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ewzubspa.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gdscctqb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kvfofciy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jwxowhlp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dsvghoyx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wpwqulnf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163gjhznczh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zyneaelf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163abcxfxof.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xaiyfhvl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163bpadluxk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163faofmqsl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tjejbcjl.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163lgtxhvhx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163shgbmcrt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163itcsefaq.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jbrttnjn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163msruapke.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ejcwzyca.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163swxovntb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163uappbnzc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pehjfdnh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163uvemppjc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163emdupffe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163lqaginpq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163tpvhhsyk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163egqtqwbd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kfhcsbug.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163avdxewct.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mjkjwutf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163awbdaotc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wwqrjgdy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xmhnnwot.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ssjspcgk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163kcttfokz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fyeasubk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ohlztdne.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rihyxnal.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gzzbkcrn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bztpvptk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kcofgmur.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163wwlgvhel.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zdatdaul.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sajwobyd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ohqhlhuf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vyuhulmm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cdibybvi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ugbzznbb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163eizfdwrv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163stwzphyk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163aghqifvr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kogpgmxc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xchxncpk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tzqseply.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cjtwnslz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163kqsxncyq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163klpbnveg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mpdbvswu.html


<!-- 参考信息 -->