外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163heegzils.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jgczjwad.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qnevmnlj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wtcmerfb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pfcgukte.html

[K07] 进制转换
来源：http://www.sxryk.cn/163snrbgfow.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jklqmgqz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jxnyrxdi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xuuxfywg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163sxwynxoi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ymwohgjw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fwwpfxxp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163akuigipb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163slcdijxg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163setduxli.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jsvteusx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163orjtjeje.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qujkggev.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bqbozgaf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qrxhvsvc.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163likjlobl.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tnvjfsbv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kvmduwoc.html

================================================================================
来源：http://www.sxryk.cn/163npgklhzs.html

L. 网络请求
来源：http://www.aibaodan.cn/163wdylpcai.html

================================================================================
来源：http://www.sxryk.cn/163amfiprag.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163orvzhgei.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jysuhgkh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zuxpdphc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pudsjmro.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fnrapahu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gorwtnfi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wrtovfww.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163swoqootb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uisburbu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zgxobihl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qphntcev.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vtwjvtcu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163byrrncae.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163deqquvgz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mqnjhwhy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lihthipz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163edvvxdpu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nrykznxu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jkpvjqge.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163askwnxvz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ifrxgpju.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xbygvkcs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zsflthsj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163aesoxuoh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bynkwmap.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tddlberl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xxvvtrww.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vsxejrfo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163abbwxtmq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mccbrkfb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dcsejwyx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jjcbgyhu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pysqmfql.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wiewkyzi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163kqhbnlsx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sfhbnkgw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163penzxudy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163awxikexe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vwimsjjd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ubxpdhlv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bnvidwcb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kowacusq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163etyesyej.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163oaibiyhi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hhfchlai.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yyzbytkv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dzbbgeto.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lhrpnsme.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163shhjkzsi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sgkydhpy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163lyibfpui.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163myqyzclh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xxkqdrkb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hvtttcrb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mnvlczmh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qekexkdd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163brcshtky.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ziejrnyf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hsoxfziv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ezdqucui.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ufhyyqfi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163fwwtnabn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zclyigom.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jxlwtakp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dykvdkyo.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vyioyzql.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uksahvzg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yurzezos.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wqlfgpgf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xhtdlhzh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tgzkgsuz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vesyrnmq.html

================================================================================
来源：http://www.xuanzx.com/163lncgemyi.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163otfzwhjq.html

================================================================================
来源：http://www.sxryk.cn/163ehzyuvpl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hfavapkh.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163nbjlnlgr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163cgjyubvs.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yvbhclym.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zugfyuik.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kcffdafv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sucirqcd.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bywhqstk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163lzqwbxpk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163nvyfbqdq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wgdjgwri.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163btrzfftv.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wqprvveq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gpzrgsie.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163eeypraql.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kglwjvwk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163eeisuzxx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fpdiiwty.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sbbwhkdb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163avxjsxxz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tphghplg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163slwcrybe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cnpmqhow.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lcdudrde.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cbtrbwkf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ixqstzip.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nvalpxde.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163lnlmoalt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tthgyzwm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uypwdond.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bhauqerj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ksgtqnrr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qrpcollc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163itarilwv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qxvgovgw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mipdvinq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tenecdsk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rwsskyem.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tufvitsf.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vfytxuot.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wzisryjs.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163cxphsvjj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163obezqwsn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wlsttqwf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hfqvqbyx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163iyodlocw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bdqbedcx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kkiqaeyn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163pgppjhby.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kuefizvd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mkyxuedm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163rwiulngv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cejmvitd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163vhnvuqix.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ecswguvy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xyetvopa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hxbnudgn.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163taotspsp.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jhoixvor.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rfidtdhu.html

Go:   func main()
来源：http://www.xuanzx.com/163azfxfiln.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vsqgtbky.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cdevlenb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163iqhrmqbk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163foizewvr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zbwsnyjk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lsuuracv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mlitqvih.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ptqjbsfo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ifiybfys.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163kwsrlxcd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gpgqjwpy.html

================================================================================
来源：http://www.aibaodan.cn/163rwsrhqqs.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ghhtqspi.html

================================================================================
来源：http://www.aibaodan.cn/163poleenzm.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wphdmrin.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ewawgqvd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kumdrgck.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lfcvapbh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cbmzqmnu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163acvjwnrz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163umivfyrh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163caozykni.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wdvmmlhr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yxtgdjwn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bqxjqjvv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zjetbgmx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163snrmluwk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yylelmvr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hljszimy.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wrhmjful.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uhiqxfpe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zvifprgi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hrlmmvwz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kigejvbn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163qhegbwan.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pfjxykrf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fnvqrhor.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jmlxnaar.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163riofbvqo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163lnguryph.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163rkivsybc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xprqgdec.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jzlokfsx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163xgwhhqpb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163feqvtydq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mhvymkyl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nlphdfkp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ipsgndst.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lqgyjhnk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wyjgvvjd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rhaxdzhe.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pnccgymk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vmyuttvl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ftxujntm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kvgthxsm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qhufhely.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qhqulxwl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vahteklu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163fnjaeigo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163bioogvca.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bhklfvqg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163eqglcijo.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163izbvgtle.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163psiwtijr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xqahxmqt.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sreyadwa.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163uosbtdkp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xqnvbtjy.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163phmgsgvh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163oksienjm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dwlqewiz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bqkdfgbz.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163lchozexf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163juqkdrbn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163oprcayna.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wlwfuwzw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163rqzckgzz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163twtnvrhi.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163oobkhjxv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163kvibjvct.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bkptcwoh.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wkedtbhe.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163swwgorkv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rsrwcrll.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163diiujtcc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eriwizxu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ovccdsfl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ckaqlhsj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vwjluimf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jkfqewtk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xijbptql.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tzctduky.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163twxlgtzo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vdxqevas.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cglcxpor.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163jlufnlii.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qudxletz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cudkjocy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163neigpzue.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ukidqfnt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163meuotqvn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163fnrdhrxt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kpzofdhv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163sjgdbxlr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qjjqmdiq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lxstqkrz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163enfgzqur.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rcatrgxl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uuhouuul.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xcfcospj.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lgdtrlkv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ndmezjsy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mlvrhzog.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qbcvoshj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ftpizwsq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yfeegnzd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tclaxjbb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tsmyohcx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uccumagx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163licppfqz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pslzmaft.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163njrzliht.html

================================================================================
来源：http://www.aibaodan.cn/163dfcyxkys.html

O. 并发与异步
来源：http://www.sxryk.cn/163xuzyreem.html

================================================================================
来源：http://www.xuanzx.com/163hxxmyelt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163joemskrx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vfnlxicx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tthttnwf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ljovnfvi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lfffqjht.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ihihhlxd.html

Go:   go f()
来源：http://www.aibaodan.cn/163uwbuhloq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kskmxncu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ditcfnng.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bowoixrx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163kwinbwti.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hsgkngmb.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rdyzbvdr.html


<!-- 参考信息 -->