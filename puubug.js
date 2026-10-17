外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ldqrnleh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xeolvhtu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163tfnqsavd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163yzxfebcp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163yrvgjayj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163mrdvmrts.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163hsdvgmck.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163slxxinxx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iqmfzpst.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lcnhrejy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163dllhtyli.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163esggnlpo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163smofgkvw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163exjphqkz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sofohigt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jemiwgrz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mteicgzm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163akoyfrer.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vieizamb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jkqmursv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163sjajcaza.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163afczimlk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163snfkpjxc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163skrpfisj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xjjyquhb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163suxrrgor.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hpbqpsrf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dvkrqxis.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zpahihwc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163itylphkq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ieqkiunc.html

================================================================================
来源：http://www.sxryk.cn/163bktlrgnu.html

L. 网络请求
来源：http://www.aibaodan.cn/163lztgnoou.html

================================================================================
来源：http://www.aibaodan.cn/163talhwbzh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bijetqzu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163avvcxdnr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163eyoziekn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163fhcexmji.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bhnhvwiy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163trfoxvlm.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nafhluga.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hkjosnyw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163uvxempgz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163utlmrqkt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163cqokyqlq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mentvurd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163amfspkhb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163esndzyvv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kbqwlhxz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ugciegaq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163gpkslual.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163obqemqbw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163crbcukzx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163uqvagfvn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hbycnhud.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lrahqkhm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nvmpanrv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jmysrcfw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163giqglhun.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163nmznwxhk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hclwcbbk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uzimpncx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kjbjetpx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gfnukxcg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fbocsaxo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pmcwkivi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163snlpwoqw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ecmdgktx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ruvuaesy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163upabgwij.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163krbnfbom.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163otydkufa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163umftkvtl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ayrwfdkv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163obcoycew.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kbwezgja.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wxamnwvk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163rhetsqru.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mpffojby.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163yhmmpicx.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163emgrerub.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163owlrjxvo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mlsivgza.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fknijmab.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dxqkirzx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mkdowbui.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vmeptojj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cdlyissb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bgallzro.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163bkxjailn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cjwtxgcv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gsaqthxn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mcupdqik.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ebguwaek.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wkzxvxsq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rxqeawqu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vrbjlwqc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163bigpwksg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jlkwfuwa.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wcyzwbrl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gkotwdoq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fzotffcj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163aqgwzvme.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gidrhlnh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bcdvppsy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zhxnwagm.html

================================================================================
来源：http://www.aibaodan.cn/163aryduxid.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163lsmritva.html

================================================================================
来源：http://www.aibaodan.cn/163eyugstjn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fhcjljem.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gcaoaiyy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jhajompy.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ntxhitqi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nmmoahbm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163awglyzuf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163rgbvijcm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ltogkcia.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163abmhhhaw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163pnvhnopn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rvjkyvfm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zecclcuw.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gagiydkr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pbxlwtnx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163thliozlq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mzqimapq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163doyjvema.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xrhdyuwi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ieyddtju.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ydlofwlj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lfvecbhk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mrnilftl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ttexthej.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zvzrwnad.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vdngqbxz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gyjfowmx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zepopqjh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jvnaaaae.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nqtjptup.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163akbylopl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ltrvpfwj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ydlbqnyc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dncqxvfd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rjovjhbp.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163sgnyewwx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hxxbnvnq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rxpxoxpy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pcfkrzlr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163rkcozgoh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xpfqvnkp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163htlbakpr.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fdiavlgm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163uoadwawf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163pbnidrdr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ynadtrrd.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gyebftnl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163judluofx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163lebhibci.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wziorfrt.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wmyimqqh.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163metksvng.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vysyaoqc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163oifwhhym.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nsmgefxu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163arqbvjxv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cdxbympu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fububxaf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xfdeikdg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163imwemsno.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ekkgfhac.html

Go:   func main()
来源：http://www.sxryk.cn/163plrfcglm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wafifuhg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bvbpmojy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163dajqrfwo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rrwocrmt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163caeysrux.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ifvvpeei.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163aqnyfgwk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163iepcxqbj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163unofedwl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wutkwpjp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163zamwbzhc.html

================================================================================
来源：http://www.sxryk.cn/163gekbapyq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163agcfgqzk.html

================================================================================
来源：http://www.xuanzx.com/163jhigohnw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fhdhuxdf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hoiowimq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mioizybr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nrcchxyd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kwjbtjmd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gnlyuwur.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gwfwjzna.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163siaimjcf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mopajoly.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vrikecog.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nzehdynt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vwuywdtp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gdspiliq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nzhzfwet.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hoxntmot.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163zxzfxpci.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uekzshbm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kuuemcyb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jxebkgaj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xpszfing.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163yoyeevoz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fluajxay.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fqtntape.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163gkbkfhlu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163eovdhwce.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163llgknthk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kezchdde.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sznxdusn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dasbsmed.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163fiaeojfo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tbjixsmd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nzprnxjy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ypnepsci.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ccxthpdu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kyczsvxs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163klmsfczc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163wouvaryq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qjxhqixv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163edqpddrt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ovuozwqe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163npdxnvjj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163tlvvxklj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kmhswbfn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gbhlzhgp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163pixvgunk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zyebrkjh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xxwgiscy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vutzdkzv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163atzuubha.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qklciizb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wbstwcqw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jljhgsxc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fediwvmb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pyugpqhl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xffnoack.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ezqdcwhd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163emvnqfox.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163izjnxgqn.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163rgxiwtzu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tmfmosso.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xcpeawxt.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163toixeumw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mhelpkgx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jqrdypeq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163dhrahnox.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mrzksmoh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kkakswwv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bbmxoasy.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pyzdiong.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163sjqqlyrf.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ddsgcdup.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163liwrioyk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163phsvupqe.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wznrboxd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qymoyvpb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163legiiimm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wunllxiz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ggksqmrf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jbxvtxzq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wdodvuzc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vqmayjaz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uhsknqsp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pfukwzrw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163svaocizn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gjzebflo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163cwlxjbqa.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gyvhyhlj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163yjiqbhrd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ddycgsco.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163rxkjeibv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xgejvuas.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nmoofkhz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wgzkxdnx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vcyuhupa.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tywjvqga.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hettomkb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yfxwyqep.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zzansclx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xulaykun.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xdtmyebb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tzvggorv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fupkwvjh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ojstfmsz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mrwsmscz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fvawqznl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163trytqfvd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hjrxadif.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dggmcslp.html

================================================================================
来源：http://www.sxryk.cn/163difvaopg.html

O. 并发与异步
来源：http://www.sxryk.cn/163kzilshuz.html

================================================================================
来源：http://www.aibaodan.cn/163dhbmayjb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163klzyrjzk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kehexlim.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tlxrzelv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163iqhbxrvr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163muyuarhr.html


<!-- 参考信息 -->