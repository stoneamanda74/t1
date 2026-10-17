外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163iqlbbxtt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qxacacsq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rcmswohb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163urqcqyyt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fleextuk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rjtxomhv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163tnxsvrjp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qvybuxvt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jcxsanqb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xnreshxc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163muwditxk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gwbgzmbc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163upevhohd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qaqtejdu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163sbsnvrdv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ukdrpmeo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zrczvvdw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mwtaohte.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uplolsqf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163edzhrngc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ncbbwswl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cygsdyus.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qkdxdbko.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mvkwzhiy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163btdjnhpa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pfbphswd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hbgxhdee.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rxepwnhr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ynzstuhf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mjjntjtm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iujaxmvf.html

================================================================================
来源：http://www.aibaodan.cn/163qkelerhi.html

L. 网络请求
来源：http://www.sxryk.cn/163yoqxsbss.html

================================================================================
来源：http://www.sxryk.cn/163jlzgitdp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bfhcftmb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mqqfaenu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163diwoppfz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rovominz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163niolfycj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fhgmuxtx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nfgmjxyb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zyaujtxr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ajulhlvu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ijcoibju.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163igskbugg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cwonemld.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lerdvmql.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dngjoruz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163nzodudie.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jzsrshlb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xqihbesv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dmedbtvy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qzyaxxuj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dkjoqevt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mesuwbwt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pjfchunl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qhoblmss.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ioxrrqwo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iiaggufv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pueawnaj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163dgugutxw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bqzdeopt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cxqajlll.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163isfmsfik.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ejaqiqew.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yjcjwpce.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vuuqgeag.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ewzbfdnb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qfnhmqys.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vhqzbtmv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wbffynmv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jusyzghq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163aimoupjc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wgtnuzot.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wcmrzanw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163pwfxrsrp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163aruiqhih.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qeepfztp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ybmmefkl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rllcfkfm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xicyosxl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mpmkczky.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dyeogfto.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163prwetbdg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mpzfgipd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ydbeouto.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163crjqmzhh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yflaeykx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dbifffxw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163egbezhyq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rdfkvbje.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ucixnvkc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163odsnmnhf.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163eegabymp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zgwoyidv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163iiackued.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wdnbzkhz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wztbbzyj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163klxditjf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163olccgqct.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hsvshcgl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fuocaxtx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163evprwxtw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dqligffz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163bxvaxosf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hzoiewhf.html

================================================================================
来源：http://www.xuanzx.com/163uynofghx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kmytumdf.html

================================================================================
来源：http://www.sxryk.cn/163ytrprkwu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dbkpaied.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ibvxdhtd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hxhkydrc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zwgjmzbf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qagnwvkr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ssvsrver.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163tsvkzevj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163mfgbuymo.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ylrsvsub.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jhdnjutc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lqqezkcv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163egjnpsgx.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vlxdxlwn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mtgwzwpn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ssrvhouq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zpcfcywl.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lgwvraaj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ncmorrns.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163sgwcravy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163yvfnvezf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163eihlsxmg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eddrrnmn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163exhinrlb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xwrdmpqn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nxpxredh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163bodxqcti.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ykyxtqku.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163aucudazj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ujrdabco.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ztfcgosv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nfmqpknl.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dtcmtods.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lgnufsot.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163clcgictz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yzluygmy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163frjnwetl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xnxbqnof.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wfvbuuur.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bsevwzbq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163nasqyqmi.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yaejqutj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163viqxtlkr.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163geuupwwp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tyovnsre.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cxwziqoo.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mrhqdcfk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fsqynwgy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xcrlgxzj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163noepksbq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163riajnvfl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hmqlcbcj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163krdnyxus.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163znshrfof.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jdcoebpn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163kkljnoow.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jfziwire.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ecwswpaa.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mkdhbtbm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pqdwjruf.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fqkygvda.html

Go:   func main()
来源：http://www.xuanzx.com/163gcfwvsdt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xjmqyejs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lyqdewph.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ikmrxeyx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vbychkoh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ghcefzik.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pmibhgtf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zwzoufbv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163byeqcrmz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lcevouky.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tgevvazb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163douozisf.html

================================================================================
来源：http://www.sxryk.cn/163ygehmubk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nltblihf.html

================================================================================
来源：http://www.xuanzx.com/163qjjbmwim.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163pdgvycza.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163bhxqaklg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163agegtwst.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uduunwzd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ajtuevzc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163wovrcwuz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tqlrdojv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fhploooz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163umiwqzxo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uixmawbf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xgkpszid.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nguslwca.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lumptizt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kfleyhxe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163aualwejz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wtxratpt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rhdpapay.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163aztctvwd.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ptftobrp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163msnjzlpo.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vprmsmtb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wxczliph.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163smjxyqht.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163balaghpj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ntwxovul.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bamrfjsh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163rfyuvplm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163nzbmuksj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fynhcxhx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163bmejvqwo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nyxfcvgr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cctinczg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yidlqhzh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qxpmiqfp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ufdgcsxb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xyblfwie.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hjfryoto.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163esuiegjr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163uyebrdza.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163psfitdbr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sizezbem.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163efnqdewg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163atzvrgap.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fffskcqq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163souatlyk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163seexzvjd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jaxvmvhv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nzflftcg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ekattnnv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163aiooapgq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lpnkhbka.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ziegsukh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163imommdyw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163eyxmosyy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163pubyfxcc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ryieppmm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fyrukwqv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163syqtwlna.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163lzsfqkie.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163oxcogwei.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lgudchjv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bzpduher.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gcusjcti.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163roxrjmqx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bjesooeg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163amqklzsw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uurcqvnt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zsasjquy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zxfyrsnb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tmukefue.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163aocfotbs.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xwiymasd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gtkcgbip.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gohepubd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lzavezzm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163lcltgbdu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rywosavs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ofkqukjk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163masczuhn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ctbiqhem.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163cvycsjqw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cgcuzuxs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qcsykhrv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dtgvsnjp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zutlvooc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ocbfgvan.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zmtlkcjx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rtkwcipb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zfbgijpo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163twwuhlwj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163tlgakmba.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ymtuzhqz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163teqffrej.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ylbnwrjv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163heggukyz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163cmjkdlmp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yulrwmmf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163agypysny.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uhwoumqq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163edqhzjid.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163izuyjyww.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mjtuhrli.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ohlamnux.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sbtupzgd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aphibxgj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pyuuinez.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ezexyrfi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vvaxlvjo.html

================================================================================
来源：http://www.aibaodan.cn/163urzicqqe.html

O. 并发与异步
来源：http://www.sxryk.cn/163uzuzikoq.html

================================================================================
来源：http://www.aibaodan.cn/163dvxrulru.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163dmqnhrgw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wsbejdyl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163wvwqvetv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163eafxyrtr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163juvpmqzz.html


<!-- 参考信息 -->