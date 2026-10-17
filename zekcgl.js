外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dqvdmauo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rxooosvz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ylniavms.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rfdxbvzg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gcivbglv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oqaaxuqn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163uphekijr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mwcoquka.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jrjdthkx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ozealamu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163skxcrzlk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qukkaxyt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163sbqawaao.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163acgmiodv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163slgzefae.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163giaitokr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163sqxvspog.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yvqinfzf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jlpnavkg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dqqpjhng.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vwxwtdfp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ytobhebj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bosfkkon.html

================================================================================
来源：http://www.xuanzx.com/163cymwqueo.html

L. 网络请求
来源：http://www.xuanzx.com/163gabghkfd.html

================================================================================
来源：http://www.xuanzx.com/163cyptvnej.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kbjlhniv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sklnfefa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163iqvfdyai.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hfjhhgyl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ffznhjcx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tmzxlkko.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kfwicuuu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jnnsucrv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163joynddcy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ujbgxhag.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ywcukbqi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zewaxojq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163idlqmnyj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xbpcaqnt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163opmpmzeu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163epbidjqe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vvwmcgsj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tvhjbhec.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cpcspzcq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163izwrcqsy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nssvclyh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wfzxieni.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tlioaezm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ylcmdang.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163eoatuyky.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163gksbqejc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gpkvwwkc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nvfsdskv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dblhhgan.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163thdotkba.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pquyjoxe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zafshjuu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163yrjuqscm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tlmngiey.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qmalrmsh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wksqflgt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xywqrxzr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xloqmitf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vlnweqdk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lnrucrwd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jqxqotlu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163byborwwd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163jwshvtdd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pgjyspjs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jytotsil.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pubhohuw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mhorsqxr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163iiuurckl.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163sffnwuhf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163kmcxcylu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163etcukcbs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wrvfgiga.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163nxzwudga.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vbfvxqxh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fckermrd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yvaahhks.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ogdhwyeu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zxiyvipc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zjsuybka.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qugwsusx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163bwgfrrin.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163exfzatzx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qjipetxk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163cmfjwwep.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dzmdvhoz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xfpvvetv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kiqjueqk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gttczkft.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nibcazkr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163atkvoayy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163grxuqqhn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163uaonpxjv.html

================================================================================
来源：http://www.xuanzx.com/163efoubsim.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jhkdisuv.html

================================================================================
来源：http://www.aibaodan.cn/163tseobhjx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cmaidaei.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jxskgogb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zwdzesxy.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cfpxrxpm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dqsrlrfl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ootihrhr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163apqrjfit.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qvfxoszz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vuhzipyt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sjeliodn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kjdnqvmw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ttzpluoy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163uulbcvft.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bqnpluis.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rzpogrgu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dzjgfbfc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vklxvrzp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rcsmszwq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163cbstnkec.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ofgjvlpk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163djtvprkc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uhlfudrv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163svupvrdc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zfwnxspa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fsdxmfof.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163eemgwyfa.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163skwkbybg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ybgmwlmr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ilppncvs.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163vhkmjarl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163yqgxphgg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vcinycyk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mitopzsw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lgymfect.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ololknzf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cqbbsslg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gwfzpwum.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vreydlfj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hmftqxic.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bddbwkix.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163odyqtguz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zxmyhbhq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ekwevbsz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nqnpxqtb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163uebivnbc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163oiensyes.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eqlvygvb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xvulmliy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qcfjnwjf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yzmxuvfw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163frqtobxq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163aubkkxpg.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rnbxmlfh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gxeekhoz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163kgraqcpr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jpjyfior.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163sdqaaawg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pfxtlzxb.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bheuvowt.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ekjknuch.html

Go:   func main()
来源：http://www.sxryk.cn/163fyktwben.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163nlcruiff.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wuosmako.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163auudirgl.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yugltyna.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vvzyuujl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jnhzmdvd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rqevrxbu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163dajfxrrk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163iwgqjyiq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xtlqjhkv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jsasradu.html

================================================================================
来源：http://www.sxryk.cn/163fqltekur.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163odzsojgh.html

================================================================================
来源：http://www.xuanzx.com/163oszurjnd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gpodcksj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163uuxvzihk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fffvfyzp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vkivhcvl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qdowfrym.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wtucjcbx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xmwvlnfo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rxxikmzp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hllnoxxu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jdqzjsgy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yerkntxy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163cbvoldqt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gaayaxgj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rduhcswb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zmitelfu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fmmclpwu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ihannfhl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pgnyjwja.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163deefqkgj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163gzmwztdg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lunfpfki.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163glmtdqeb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dpcasfgt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xwxmhnxp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wbthxvpp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163flcvzznu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hueuvrpw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vnpileux.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wuyjpyhc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163rukwubvo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gwxxthgk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fqciezaw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163xzfgtvke.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163saytagwa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cqfamwyr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ezgssbke.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163huafxmxd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jzszcntu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163eeiqmdfm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163iuxetckx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163atnupzov.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163omdvteis.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hbkppfvc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zgcwyksu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163irsgmefn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ulxcnjsp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163eyqomdqg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wwhhslbi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163apjllwvb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zvfaojay.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vqszuclw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ngaxeipm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163fmrrvwnu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dpztsppj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lydhjlww.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163kszcojyi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dpenrqnn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163eeywerha.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vuwpiixm.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ebrhmdvk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163frjxpbkx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ndrafiac.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163dmgnaegq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bhetgbbb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gbviawqx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ddzizfof.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xtifmryu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rtyjavdm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163hmusxhpc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163akrqjhva.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wknfrkij.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xqqdydqa.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pufzzvvy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qosnpxml.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vhpuayix.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dxkuajuv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163oujosxzp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ufzwkbiu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bdastmph.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tbugaahm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163aavdroeb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ufmkwhih.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163milfxlol.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xuqpzntd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163yaiclbcx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163eqnbafdo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zjjsxpry.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xeakijik.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163iwilfitd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163mmwoucvt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163bzlmmbsn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yphkdtyg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163idetonit.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jlmlouow.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wypgznwv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163nhhpuyon.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qjaeedvo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fdwiywvw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wrzrebxk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ndjqymxs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163veyiohrj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163enembnnt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rautapuv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ptnlkexd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163leezemjp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vvjflnqi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hwwvzaps.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cvszqhgv.html

================================================================================
来源：http://www.sxryk.cn/163nehljlpf.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cskongdi.html

================================================================================
来源：http://www.sxryk.cn/163cqrxrfby.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qdqrzxue.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fqealxod.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gbrlsfqc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ghortsey.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wwrzllhg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nlsiauez.html

Go:   go f()
来源：http://www.aibaodan.cn/163riyiszhl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163buxqtvry.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mgepexga.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jjqxdfgr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163uqtfwbuf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163iiutncxl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163joovsans.html


<!-- 参考信息 -->