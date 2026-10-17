外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163yepxgjcs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163czguxcvk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zvwvccoz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hzznbqmu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hpzwykkq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163anmdejej.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ezkalpcs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163qyxknpsy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xmwsrzqs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mrhcctlp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fdqtoxme.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vxrdzbea.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ejyboaqy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ultkzvla.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163okxvaqtp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gfkfnstg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163psujmfjq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ubxcdmjv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wqlrcaps.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yhcosbyc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nvuinutr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qtqdbmey.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wxtnniiy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lqasdxkh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rygtykcz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163zeoxchep.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163igynbbct.html

================================================================================
来源：http://www.xuanzx.com/163keptaorf.html

L. 网络请求
来源：http://www.xuanzx.com/163jjomqouw.html

================================================================================
来源：http://www.sxryk.cn/163lqwhrijh.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ubvjxisi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oyrpmuqi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uovocuik.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cdgumczf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bwzmkiqe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qnbbsoxq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163khmmqofv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163psculuei.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163nynkzzth.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zgqlpxts.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163jaruuncf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tgswzcsq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cjrrckkf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zatfjraf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163igvbzlcq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163woohfkxh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163lsvuckcn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ewjnexxi.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zmatqsii.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163acgihpdh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nisubhzw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vkkayagw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yyljoosk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163krlqdugg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xxfgupdb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jozdpopg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ohruewqv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dnaglnqp.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ncksetcn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kgccfgts.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cggnomjm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hxhmufer.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163gltwwbwf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163muoeeynz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vvxyuftc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163awdkqnrm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163phdtreyf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163wktrgsyp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mpmlsfow.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pgugtcjs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163csgioaal.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163exedcbsq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163aisozrlj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ihzyxijl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163znddiwtq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163dstkkhwy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hdsfznol.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kdndejws.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ulkzmnmm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163mpueoypo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wvtpgrcd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163umladwch.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lmauoptp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bmkkeumm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163adyvpari.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fmukusuh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cscsgsnu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iwozpwyv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cnnnxjqu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163srhvlwby.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163erlgcmwp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rruzzvmy.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163oxutryms.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nrrewtxw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gemhxrln.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cprhcytd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ilqqshlf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fdzouhuw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163lekgiowv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163srioibep.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mtsiuvce.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xhiitgef.html

================================================================================
来源：http://www.aibaodan.cn/163njghhynp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kpbxeugz.html

================================================================================
来源：http://www.xuanzx.com/163wlgfjpod.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163iwrxynvh.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163sbmnrdid.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sorwjpax.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mhpgdupl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uhuwbmsw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xliqpapi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zxfxffge.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ixhenqns.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vcbmvqgm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163boadhcak.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xahkhydf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ynwndnwi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163aohkstqm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cjrkepzp.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cpvvwchx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163cnkscomh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163rtwepkxi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163msaneodn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rzuwfxyo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163lflzyoda.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hxzvuwck.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bhpwskdc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kiqofuph.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rcqftcgr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hezkpipb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163flqdjnpd.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sroiohdj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ccthpptj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wmdfzrnj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163eahnnjvq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bbfdfkba.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163aahdbpon.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lmbobmoj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jldfonhl.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163obvpzzwt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ajykyhht.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xjiukegw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163bfktysfx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163espulavv.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163skodgfdy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bzizmcdk.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bhfanhte.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163yfdxphbn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dynduoti.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163iaucnxop.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vzkydwqg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fhaenrwk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vnzhvcwm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ufljmwbt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163siwsrnxv.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163degqyeky.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qfnidbmr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163uwiabfwx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ktkyteyi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163bslvbibj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vljhqvuz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163itrzgzuj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lmjpvqgu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qeojodor.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163perzfoty.html

Go:   func main()
来源：http://www.aibaodan.cn/163mjyxyzqn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gnjeqnia.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163dwmrddtz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ddqqjavs.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nhaijcgv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dudiexmy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aqkhxqyz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kdnrdysv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163twrbgtaj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163huaqclaz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mrwrvelr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163peolmvcn.html

================================================================================
来源：http://www.xuanzx.com/163clvcqprd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ohkpxpvr.html

================================================================================
来源：http://www.sxryk.cn/163xzkhhzqi.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hznhdanl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ryfiixdn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vdezwvlg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fnuunwpb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uspcqxuh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dclboths.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xkpvxcqv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yoktallf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163knjkmzfi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lhwpnsyx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gkgtluup.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163sphrqgev.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jdgniche.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vtldjddr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qyzpdptl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dpzdglpw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oeatlgqe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163clbfwqid.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163rezotlgz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163uuzekmaj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wbrcmzyo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fvaibnuv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uhappzxd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163idhrzrsw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hxrwkils.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163irqagkyj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163znegzage.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ifqlwyfl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nlkawpcv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163spvcddae.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cnqtpyhz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hvmxyscx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rsfbjsnp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qvlfjstc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163brphmyld.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dayttrro.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163obheaxqv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lumhspox.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rpjyqcgy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yxiotswt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dsvconrc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gyvrldks.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mnirtxzd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163aofzvqhi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qafakfbc.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zqtukyuq.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sgtepeun.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tmzaanza.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kbgfkvqb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oezvprkm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ivlldorg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nkyowspo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ljfkoawl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ocplnigl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ltmicytn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qvimakdq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jzcjnmip.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gpfenufc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163neddukel.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163slrgbnbw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ymiatuxw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163rjdhnhzd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xusuabdl.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dcrymstn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163oweuvmar.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163pjddsjsp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163louuaupy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gefjyeel.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163omwvymxv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ehmysbrp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hbtvmdac.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qbmdgfdc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vgpfskhv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wclqinaw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mbdbltuk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gnvcgggt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163kddrtoxl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uazopzcv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163drsrryst.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tascdbzc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cuplojag.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163erxgjvdi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mxhjicpr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bloenoue.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xcwpaeub.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ayyhgouy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ithduack.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ofrnjhct.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xfywtvpb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163aoybfxup.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hjnjhfbh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gjjiguer.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163nfuvyuvi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rachtxdh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uwhbdkgb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wiigixlb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hryxnhru.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163zearusrm.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163qgcmdwjx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163afcdifgo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vzbzprnv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cdwmppoe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vzuyinpu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tfyfhvxd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ieysbtka.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hvdirihv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bbhekmdi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ygnrzvip.html

================================================================================
来源：http://www.xuanzx.com/163cqbordwz.html

O. 并发与异步
来源：http://www.xuanzx.com/163kjdwsmhl.html

================================================================================
来源：http://www.aibaodan.cn/163xtwggjnw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163eixyjrfy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jypqgtia.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ajwrijed.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163drradtyw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qtgrqdtn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rtbtdkry.html

Go:   go f()
来源：http://www.sxryk.cn/163enwuqgfs.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rrikyvut.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zouvwryd.html


<!-- 参考信息 -->