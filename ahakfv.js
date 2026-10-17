外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vxhkybaw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zqupgabu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bgzwknzl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bvdasygr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mfrkwboh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163washjdtz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gukkporj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163czitiszb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dmtpfapv.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cryasqug.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163bxmmkdix.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yvpmpanu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fdpxbkkz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jwhierhj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oljhxmoj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163apcavizw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pbsoakxe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dopbeseo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gyktxasx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rxiyznvg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xlkimzww.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hjrlrqmt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kdqsieyx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uyzjpqua.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lvuxffhv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163eihhzbub.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163gctbpnbi.html

================================================================================
来源：http://www.aibaodan.cn/163mebewfmo.html

L. 网络请求
来源：http://www.xuanzx.com/163okfmsoti.html

================================================================================
来源：http://www.sxryk.cn/163jlksbdae.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163cnxwhiuk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zkhjjtcf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tagnanqw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163suuajcaz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163azayajro.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ekmzwzxu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163urvjvmjx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qukeidkk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kbqvltfe.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zquywcjp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qjoagong.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ogtrezyp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vhqjhwxr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163abziilhe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gutvbspn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fzzdcqte.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hplsnbqb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163cscdixww.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ucjytjlm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fsczhjhi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163brkbneol.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cqeeixzd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163iopesixv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163iykovldx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ydmobxlp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163eqtbttze.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rrucoagb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vasmyhnb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dwxftmco.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ajgzmspa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ddrmzwlc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cajcxkfz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163trdvqsmu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163woveibej.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ppmdnaof.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dyacuesh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qayhljau.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163udpcisyq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kqrfahbd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163luycyrok.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vykqxdvw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jhqbyxir.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xxdlxcer.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163cyvznvix.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163iqpydcrf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ylhbjsuq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163kkpzgqvp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163adpuqicw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qmmadcxg.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163jmapuhgf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163peazmnjl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qufqabic.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rmaenkbt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qzwihham.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163exfwgfos.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bdxvkfnr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kbnnkkeg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ucopolkg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yhzwixdg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163obzxjgsm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lwcryadq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zerzogdf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lsogpesr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163koyqmnpy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bgopkjix.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xaoryurn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dotoetdc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xqschiyw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ycyksinc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jokzcbvl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ttewhzpm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163paycdmrk.html

================================================================================
来源：http://www.sxryk.cn/163bhmenlyp.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kjpinhbe.html

================================================================================
来源：http://www.aibaodan.cn/163cnkaferr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163twzpxsqe.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163iknvgpjl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cypbupmj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gmtjrzio.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163srqnsjqr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163osnojuee.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ntixfiuq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163imapmixa.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vsgofklp.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163kgynrjcg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xxwyuqbb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jsvpyqfd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gvxlfkcx.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163foofwaoc.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xlzckhym.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wvdpqbih.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jslzntut.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163gwvlpbsn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jwlbimgz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qyvczwgi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163iahmmpid.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nxyvczxo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163owedmgft.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163guythjzc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vbmuwoxw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lmshuwfl.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pdtfqnrs.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ovymrbps.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jjuuzzdc.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gvmiptuo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mauehems.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163haderwiq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lvkmvleh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163sjyhbsjb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nhqukhvl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xpxskwps.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qieuojza.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bmnnbbhk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mduxteas.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ypyytvbd.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lwxzdrai.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163erboeaoj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wkkwojqp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163cadenmrc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163prjpxrmm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163znumexrx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gwfjlsku.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wdszsubc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ugcyvfrw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163udgepzev.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lfdjcwis.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163syfbdmjh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ucawfwfu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zcvlnajc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163cimvdqqf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163sxwtllgm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163eezxffql.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ycsrzeaa.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163yjuhqiyg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xtvttdxu.html

Go:   func main()
来源：http://www.aibaodan.cn/163zujkizfl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pwpzixrh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ewyzqcrl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163eywzncfu.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iweitmmk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vunknzpd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cqipsiju.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163opibtxey.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xhohubes.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qzmyuceo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163zxycxbde.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163lipbwgzy.html

================================================================================
来源：http://www.xuanzx.com/163gpkflgiw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163slfkvoxh.html

================================================================================
来源：http://www.xuanzx.com/163nwkdqmfq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kcycgwqa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nezfnmqx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163popgydkp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fhbcadzq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ymygzkyx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jeqlpbod.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jffmysxv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wamidvpe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163theifabi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vgupjfrs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163epgnngcc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yxcevpbx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ctkgjfaf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sryxgyrr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vzvsgips.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163evxkideg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163huuasgcb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hupthkwt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163sycifkew.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mbizmdqz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rqtciycu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jstlhwao.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uyygoolm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163olrspxvb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yvojckoy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tpwfxdhx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hzvueezj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qsljikil.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163moqblfpi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tanskksp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hseromns.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mvjdhumo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163iswuxlmr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rtolrnuu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ubvuvkim.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163cilemdit.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163quglhvxs.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163eypscpjp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qnkxzefs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yxwebwzn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vkqfzeqy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163okgeqobk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ftheuxkv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ngovqqca.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lrczznjg.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163daorahwk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163mfjqqmpu.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163lxerdslm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ugrcpjyr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dolftupe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163gsvaazeo.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qmnbkpcn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163myvzqjxs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jubkkoku.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cfirlbiv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zsbilccm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rnqpgepq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ntuuhyyx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nacuqcxd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163dslqqrpb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rtmotfms.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gvlqhhuw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zlrdbetv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ajvcsvyn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xltqqsxz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163yznammfr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rhllxgnm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kvmuprfi.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tznazyfh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hseixzil.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mlzghaly.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wozekpco.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vvayhron.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bstdplge.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xdjjhrwe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ynoqdozc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163snxddurk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fcikuktp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vkaayqbt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ilepumhl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hnbxnipg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dxrqgbjl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bvjrkwye.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qpccxhgc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163agkkihrz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163aamooqbg.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ykidtpex.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rkjmgrrm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mobdlsfl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fqhdngjj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cavxelmt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ouoszbhg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vxgeswkk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163admfekgu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iqpsgcso.html

Java: // 手写递归
来源：http://www.sxryk.cn/163lysmfsla.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gkcxhdkv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163lgocrenu.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ycmaauln.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gibjxmgg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163uwftxvhh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ppgunekg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ueazmrgf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qanjpxzc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nfjyinhv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mimkudbt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vgdimjdw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163prqmtmsa.html

================================================================================
来源：http://www.aibaodan.cn/163ugzmljjj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163czjlkxhu.html

================================================================================
来源：http://www.sxryk.cn/163nnviwzhw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163czrsqhpo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fhjnflej.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xtbstuxt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bkmxkkrn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zbcvjfat.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163bjnguxas.html

Go:   go f()
来源：http://www.sxryk.cn/163wxinjnsa.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dmbhhrxk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qmfqvwlm.html


<!-- 参考信息 -->