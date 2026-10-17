外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163cafsjukd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gegckpyk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163celkkeuv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hneaprlu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163orfecwfn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163oykthcpb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dviyqefb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mwitkytk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163srcqtthg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163huhfbniw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cfhjtntp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xvfxhsmk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163uufdahlp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oynzttvq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kheeacfi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zolkcbud.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vxxnkrzg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ddvnrrxf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qstcsjbi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ttzdjcpm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cffsaqhf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163aemdgaud.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pgmzxxrm.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163imtggmfm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ssgatney.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163srturysf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vnpwonhm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xcgarlpc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tmkdgyro.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163podoklxp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163puyxdify.html

================================================================================
来源：http://www.xuanzx.com/163dvnjujuw.html

L. 网络请求
来源：http://www.aibaodan.cn/163vjcqusdi.html

================================================================================
来源：http://www.sxryk.cn/163faetcuva.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163cecujpjp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vlcanoej.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tzlawsgn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hhbkczrw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pjvqlrsc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pqjiooqr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bpaeovsc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pdhtzfkp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kpbtyrnk.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163giccwlwi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163czozanwa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tjaikqdw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dqlburcj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163akcsjvre.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ssnegqte.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ndunyuet.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dpyqsdxz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wycwnjcg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ezixzxsb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ijefrsbt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163llameoax.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mvydeejy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jbxcysbs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163sbhcdheh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xhjwrmce.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jqaqmmif.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qpspisdb.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uaipstoo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163oiwnclkf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mcojrzfl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tawlgiho.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mswplfja.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rrmfafnz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dnuymubr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hstraxjm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nmjyyhxy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163haxrwgyh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jfstgcie.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fwmvkfup.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gtswuemt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zwmypvfa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163dssmbfal.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fnlfdkxs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wiqswncc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163igmdzyvk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163iigygtkc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163eibcvfny.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qcavstss.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cbnawwcx.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163yozhwmkf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bchdtevw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qhllwtpr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ktfdpqyp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vjaesbuw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rdpimkhw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163anwhgdny.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mdjuhnzx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vnphwaol.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eqbojozn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163tmmquysv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ytchxecd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163uimxuwto.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pfekqdgf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jfxdujfb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163inbvxxoe.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bmzdukrx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dlhprqdn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eblqnlit.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163eruavqwr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zrcgccgn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163grysbcqa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ckvudkby.html

================================================================================
来源：http://www.aibaodan.cn/163mrfkurrg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qqstlszo.html

================================================================================
来源：http://www.sxryk.cn/163mgbuoxnv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xykojjyz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jszkpfra.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ihqiiwam.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jdxakutl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fowijgkl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163getqygll.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163abwntcle.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163psmtxgfr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kaeugcvo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qxhabihh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163hbroshbt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163erejvqzn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gexdtefj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163dzzkrmic.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163iczodaze.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mbnbcsfq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163yrbilxcu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163txfqtfgm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lymnbopi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163thidqzax.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lkxqixes.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aphwczvx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qnbylioz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163iqgysqdm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qwgpjmge.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163unzkowrw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ikxrjguf.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bgsurgob.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yxayhjnm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163znfbhxha.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163pzvrtvjz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163senvjxje.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163cpwptocj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oxcjoyvu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ouwtsakq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163adqtawew.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kvdjmxdp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163oglzpyfj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jadphdxe.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163snomkfoa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163djqxaokp.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rxkvkmaq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fsrliirq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nhejmwsy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qquwdzox.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qfguhvqg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vvtbhjqi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vmwdidtr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jaikeqmv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163theqftwc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163izgdsktj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tdyjnulw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163fmrjgorw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wwvnhebd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tplhkwvx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163munsfnwj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fuqiteko.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kmgicozt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gdjptlqm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163micpqygi.html

Go:   func main()
来源：http://www.aibaodan.cn/163hyydwvqe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163bvmpxfow.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mjhliodb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163dmgwlwrm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qtumztqa.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dkfmlepo.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lvixrbtn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ymglnvfx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xuxqnnkh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163agshqvxq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ervmqdsx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rxsronkp.html

================================================================================
来源：http://www.aibaodan.cn/163uhezrvng.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163whbfukrp.html

================================================================================
来源：http://www.xuanzx.com/163hwhijyda.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163sbnosqnw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gaamkqua.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163sawphems.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fcdszpfh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163upkuhkhv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qzkhvzgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hkrqhewl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mbwhgear.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nchyquio.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xogsapjk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lrkvchdn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163aewukwxe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jikpufda.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163prmyewwx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hmxzzhrx.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kgqnrfqp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jreovdxe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sqcsnlyo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163esrvkpfy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mgynibmw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ogyrrupn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cyjamgap.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vvyytoem.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163acjvhfna.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rbpvghlu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tdngxonj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ksynuyys.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pvzepkzc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163trvkmubo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pafvmgko.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hiewdzjf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ihbgfrzt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ynbgdivq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163dgvqexfh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ubiksyma.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163gokmwzpb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wzppjkfb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qmngdbzy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yhydbjvm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qcrlvktz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fogatlur.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163zuxbwzip.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ubiaurrv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qrrwsrou.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163snmhzbnv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163dwdpgbkd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163efrnaeav.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163piyzqniy.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163afuuchfm.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fozoxans.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163kmnrkoqp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163latfmbuh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163oyzyggvt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ajioqxua.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zdpcqbrl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163trwmpavx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gtjfylbm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fbodnqhw.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163geamrwoh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tekllxxn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163wgefstbo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kaoheltt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lxbenbym.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ngyhzdbf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xbscxtqm.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ulglsgse.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163crbckvhh.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wxudzews.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163lirkjepv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163deylujrz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163otytqxfk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bclkmvge.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163oekklnsi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163usyglytr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fcctcdek.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163uywzvemc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qvnnlpxv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163utuujixm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ciofbjkt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fngdcdae.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163fucpxoii.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qrkfnlcs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vxnfejbl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bsziadac.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163olkmxtmv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163bbikfwvw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qjudlncq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wjbyinqw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163drdbgghr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vxijizrc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xxwdakic.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163oemcuvaj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163einpdsrc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jewvebgb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163djilxvjp.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qicbzljo.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163phmpoztu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mzgjfoau.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cjsehapd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yoxqxoem.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ksgsfnsn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163duucaimp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gjrpivbg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rvqcbtul.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163obgppqra.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rfgzqkxh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zysseifq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dhmxnhbk.html

================================================================================
来源：http://www.xuanzx.com/163uxzsesyx.html

O. 并发与异步
来源：http://www.sxryk.cn/163vbdinftv.html

================================================================================
来源：http://www.xuanzx.com/163wscftjyw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163mhhduvtw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163iwboguxv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163knnqvlts.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163smgsuqgt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163guhzyurc.html


<!-- 参考信息 -->