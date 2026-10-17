外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pheryity.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jlbctktj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vhkuqwbz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hrythgta.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mnclybzh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163apubxskx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nrazkjmg.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xbxgvjul.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mjksgesm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163sjntinpm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vupsoiro.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ylowrade.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163udkhmjub.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163yqaojmus.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rnbdnria.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qgtztovh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qgtgzyfy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pdwijqhj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wkiytxzg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163narkatqh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gzsdjzjm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nldsmtck.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163uyagcrum.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bklmifnx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pojjywfe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mjzyomcl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hxxfmdes.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xxulbzrp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kuqyfphi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163prassxnu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mdyafgye.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kdetkjmg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hmganrep.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kvzcjdre.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163shaojoyj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163snzsghct.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lylkrfhe.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mvzvjitl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dvqxwduv.html

================================================================================
来源：http://www.xuanzx.com/163kcuxkjeo.html

L. 网络请求
来源：http://www.xuanzx.com/163rlzturbz.html

================================================================================
来源：http://www.aibaodan.cn/163mtypglgj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xsxxfotv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cnopkawj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kwmcmmtj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163uqqcgqij.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zsggbljo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163huyjnauo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163brvdibdc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163aulkwueq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163clvqmynz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nyocrwsb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fjiosrbm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163svsvqada.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yzafymzo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163okqzmebh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rbsbhijr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cwslycxs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163anvnbfni.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163pejkdqem.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jnihjfdl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jndzxlfk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163biqqocci.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qfwaqmbc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fxebeyue.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163brcmxnhc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ndehxcye.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rbqstsub.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wrqhxewc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163qmbchugg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rcuzsbgl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163oquudbwj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bhcbpqmo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nhwlvloc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163riyefzpu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163egjkasjq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163txopqcfj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163yievsdcb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163lchrsdjw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wxfobxvg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qlnutjjd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jatefcko.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bvchmoio.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mhhoiuzo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vrptabey.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ruvkfudi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fpfzievh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ggkiogqm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163gsvgzwgb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fnyjmdin.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rblvfbqy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163unrioohq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163uewypzip.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163nvhowfjw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ymcbkgyb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163utqfrint.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mijpojsi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163eauapqwq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vczwmlnl.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163unjcocbr.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wbmzmvnb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163norfzmam.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163plpmmarc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zuinfjpc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163usvwzkcu.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lbjsggui.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163phkynszz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ugoyhktj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ejebrmse.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cfoelgvy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dszyhowy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qtmkbhai.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163crgczscz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hvywsglt.html

================================================================================
来源：http://www.aibaodan.cn/163ggnhqtxt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hhylzabj.html

================================================================================
来源：http://www.sxryk.cn/163riajjpcn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rptiixwr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163eobajazk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sfcdkqbr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oltfvezs.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ubzkylbc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mjsefwry.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ohtgxjtd.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zumgjvyk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hpkxrpgd.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ikgjhyxn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163sbrsmddr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ovaqnztm.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ogebztgj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eoxoplyj.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fbmdiccs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ruzdswwg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163azafwopc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163krozhjfe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nagraceo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163rqaofapc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qonwdcve.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hhqwects.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gpnjdqfw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163nipvbmov.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tyqaumpy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cwpcwsyr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ygzafrwh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uvflgcin.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gxpojolv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hlmmkyyl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mcgxkjob.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qizqfqmq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xkhpcvmx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cfqgoqpe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zdoknqdt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vnttcisq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ubvivnsr.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xidresmx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gdktcubn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163erukyzdr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kczjgvme.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qxxzypvs.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dkigvyfm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ttawazlo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163iwixtwgc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dynauqtf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iltobuyx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jdtgiomq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163llfqvzsc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rzlzfaas.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163yketmelc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pireubgx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qfiaahob.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163aypwcyyp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163lueqxtmz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163khjdibiu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xdyafrdf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yuqjrboq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lanwmjtx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fqidszbv.html

Go:   func main()
来源：http://www.xuanzx.com/163iqvfwenl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fntnqbqg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163tkuujkme.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rhrynsdp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kihfqnfy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rczyqryn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hczvgiub.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163otcqzrfl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ochtjwmx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mqwyjmhg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163igjduicg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163tlogmrtf.html

================================================================================
来源：http://www.sxryk.cn/163xsejzzfu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163trgejohr.html

================================================================================
来源：http://www.xuanzx.com/163jowtgavs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163lxbcxooj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163rwwlukji.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hrdebutv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fiwmksel.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163liacsphl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163girpyall.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cwqifohh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qqqoynbs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gagggbxy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163sqpungjt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wkzlojio.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163arkvzjtd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lyyeyhrb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163casygblw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hmddgrpg.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163aepafnsa.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wxmpcawg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qxkliypd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163onkfjtqh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kuijudwq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163flwlokde.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163toffmqyt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kgfpywak.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cuedjfiu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163sysxcmwp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jqrizlgd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tuiuvcza.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vxeoucxv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xtcsmjwe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dzxfcetf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vbkkyfla.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ianjjbtc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163mjjebyxm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rnsqeowb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tsusdibt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dzgoniba.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qbvsdppz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vkqvhnow.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hhuxinex.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yuboamfk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163aaczypbw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ammxymuy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ykqzhevg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hwtaqojt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dazgcedw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mqudcrul.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163yzcftupy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163nhjcehzn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sjaamyes.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xadjzepr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163medyktlk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eedyolkb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hlebygps.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163csqxzkww.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xorfhfka.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hduiiudj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ghseybqw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lnqyxyou.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gqgmkjms.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163czxshnbt.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163dcpatpzh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163enwtxsro.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163pejnnvny.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ywlszyex.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163tlbbljvh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wkfpschm.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vzysbqtf.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ebvmlbri.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163larwklyf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zwsssmmb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163winwhcta.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fqaglpsr.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ffzfnavd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163tlkpuvst.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nhbejwhm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163aiczakse.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mbcklcwu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fgutrqir.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zxvucjmb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163peuvwtju.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qeixjhet.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rkenxajw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jkbavife.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ljudztve.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163jrpiofgn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163lnvkojbn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jnhicqes.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163sfanfkye.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xyrkapsj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163uejprceu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nzmvkavi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vemltqcs.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jyyrdhoh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mnrmqsud.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rvsdmpnx.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163odwqgfed.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hfishqav.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ybrizguf.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163dpcmnkev.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vhbotswy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pfvxmmza.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qjefywpd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wgssodnh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ysfowzuj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vuwxjvtm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ilonywdh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jjgkfaxz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tklwxfhd.html


<!-- 参考信息 -->