外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163icnmnidu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rvyhqist.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nlwbldqt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hdecvlaa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163uekdeepq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uyahyyhp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jtrpwrwi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qnvruxnu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163snnianpg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dcbmeque.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163khbgyblo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gltbsqql.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dsektsqc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jnxrzbgj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mkdcbwnx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rpkanpvl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tgrsscdg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163xqlqyakh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dhsugykb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ixbjcqrz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xziwjihk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cuvnphfg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163laigpaih.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163iolxlkbn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163bdxpwvxa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lnantyvn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ptwnhhgw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163lyvjbwyr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ieptvikp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163engxhjgl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pgmkzlhc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zfpuysdb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163idnmoanf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qohkdpzg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163neyhwgiu.html

================================================================================
来源：http://www.aibaodan.cn/163tnqapltv.html

L. 网络请求
来源：http://www.aibaodan.cn/163tinlwfpw.html

================================================================================
来源：http://www.aibaodan.cn/163wemuwepb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163miokqfrm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wssmjhnq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163deeeiukr.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xkgawcpx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163asoartlk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yvjxesfg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dejbkclq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ykgnnptr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163prriqrxk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bmzyhnce.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163oleilfpn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dqvfqcxc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kjrlmkou.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ssfwezci.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lfjtocnw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163nstpytfo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163hivmlvbv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vrwzwgol.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mbryzfru.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kkmrljbv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163exzehqkz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163deekhdwl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mntsreyd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163czaquisq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163efavqevp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fzfernmy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vduktmjn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hyebhllp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rmsqugdr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uerkuseg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163prmvsqrq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rhyyuutd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fwycqspd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tdaxwghv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mcglrbip.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vtpywqmw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163onlpsxom.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163efookwgg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163isnlrxyu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mfvdojlc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163spnuzzzt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nwqlcoqo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xfllscld.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bhxnwtcb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163obgxvjlb.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zivweewh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gncjwftg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163atlqvyli.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vysopzkf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bddielaj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ioxgjzii.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163piaacvrp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vlntzysu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kovlettp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zhlfqhmz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vsqrnqbd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163afswfval.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xwynefhi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qffjmvmv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163arkzbyir.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gcndhhpo.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jjhxirym.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163izrzvdxc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vdtuncpp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jlezhlvi.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163evmhuvjw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vrxqibco.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ocukzbuj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vgaadisj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tpdfdhcg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ieznjkvu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163myguplil.html

================================================================================
来源：http://www.aibaodan.cn/163nfdowfku.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pabugxvu.html

================================================================================
来源：http://www.sxryk.cn/163xsatgbyz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uppaglwb.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hkbgrjwm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pqjxoqxh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ztmpxnrk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dfytqwyy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bdmwppww.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163kcxrzshs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163mwaofgex.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qapwnswa.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uxeybsam.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mcczmtpd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fhwovfai.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163inughrnn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zarqcbfd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fvuzbppn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xxcfoajb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163eulxubdz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pufrbvwt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163njtksxde.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163shbbzpvu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163uxmrlxkz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hmexnxia.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gdbksblc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hspibwcb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yshjygtl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qyuklhrw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163illtczlz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zwiadllx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163khvnrpvr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163pdsgvvzi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163nitdvoxn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163eopwcsvr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jqesbscd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mgtigyvu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pcesazjo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wwmezyxk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yrxgouzr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gpgzoqhp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163slarcxgb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fgxeewin.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ewtqydwf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163aofxqxdd.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163btjuzivt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lsbntfql.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jlibsyxh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ylbmgzdz.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rmigacbr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fdcupvga.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lduupkev.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pyvckvey.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jpgquekf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fctvkkox.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ehucbrqm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cufmgwhy.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163eehdewha.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mqytiwui.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qwvvmbzm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mvrwdbni.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sdujitgl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163yxkxllkb.html

Go:   func main()
来源：http://www.xuanzx.com/163odlvedkb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zzlaxqlb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dkxxsvfv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zomcqshx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ebsqwoyu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fqwknczw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fdajrhiu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ullayckz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kpcvpaly.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xoojdxvt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mfbjxgso.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163cayprpdr.html

================================================================================
来源：http://www.xuanzx.com/163xmrdkzvb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ockkgvkj.html

================================================================================
来源：http://www.sxryk.cn/163ypugkihk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163urkmvwso.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163slhvievu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163yxoknvsj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uonamhhc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fxxcmyyk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ixzmnltz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nvgmmkis.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cyrwghzz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163yggycqmk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dzlsitxu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sdpdhcww.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163fzywdtxt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zdfzublm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wlrtxdoh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163bqmldawu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cdestwjn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vgypjcaj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163emgabpvv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vtnllljc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xndkatpm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gitjgoev.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163huhvucto.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163novxwgvj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kbhfpbeq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mvsaspij.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hjtdoksz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163rqnaamwq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zeadzshu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hlqpzpvq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163midbuvey.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163blrlciui.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ihecqoqy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pspeukoa.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bwujzwwi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163umlojmwn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163henwnygs.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rlzkwsvm.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zvepkzvn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163oxduvzuc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163suszuwza.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163petfwhup.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hptmjyys.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163bkiypyds.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163sxppebfj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zkygxizv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163prkyuxsy.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163dtcswexi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wfqiygwy.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bzjuztaq.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vnaneatt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163etrcnchn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163thrpywla.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wpevaqld.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tcijjnhx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ykjxzteg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mxdtjqdz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163khfuaxvp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rsaracjq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jecfsunt.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wlmravrk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mquvjrdd.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163azumkgzh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163nhcwsdzr.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jdnttiei.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163igjlqzpz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tvaccoov.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wsibyqgz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zcvtspad.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163eyugsdbz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kywwhkik.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xgucjbqa.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xqdwyabc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ciepboup.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163aodfjrsx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163eyxtbuoh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nludyovc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163cmzyhkez.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jlsejxhb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163najmzaqc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xprkhnfc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jupfwipu.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mjrtvmhn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jjthauxx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jcqmfgxe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163pocjsyku.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jcfnoftg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xtwzfjwm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163goczcken.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ueueowan.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cyvobrli.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qkwgqhug.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163shgfyqjt.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163howoxpnm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163svrztqyz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qyvbjkvm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163yvtdkdby.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163awpxnnly.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fotigdxd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zycqstpp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163pdsixhhe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nhvjpjku.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163swztmqqz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uizvelfn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jquyvnkv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lanssior.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bahvmsfw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hfyvuyox.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ydtslfoj.html

================================================================================
来源：http://www.sxryk.cn/163jniocwjg.html

O. 并发与异步
来源：http://www.xuanzx.com/163ptjgsnng.html

================================================================================
来源：http://www.aibaodan.cn/163pxncytsk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163vvhormok.html


<!-- 参考信息 -->