外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163szpgxhtr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bskpdboc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tnggdwat.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vrtexmgg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163bgvtfohy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oihneqrq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nafsjlfa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tojdjiuw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bsjlbmts.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ieooiqlx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bqrhwjnc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ilrutixz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163moyuhhwy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163enkyxtjc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jsromwew.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163taamucmx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zmkojqdo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163buxpxcxz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163csutcwtz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ogcsjcnb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dlwjclgh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163svwyijsv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bvrbkeei.html

================================================================================
来源：http://www.xuanzx.com/163pdkrtjrh.html

L. 网络请求
来源：http://www.aibaodan.cn/163tpnudgmw.html

================================================================================
来源：http://www.aibaodan.cn/163sghzodtz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163idiaqxdi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wvcbfmhl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ucbszjwy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163lxfhfggm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163noqrlqjc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hoahkwuc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163whveabin.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uyrswjak.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hslmombm.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zjftintn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mndlbdxo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zneetwqh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lcxhkwzm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wlhzcjkb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163menzqfwd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163aiylanoy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ncxbhwou.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tvtqjwtx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163njafzzke.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wgfjwnuy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163knpayaky.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163izjwtruq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oqqwfxfj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rdgplzea.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ybwtfvpj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jhfwwjdp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zedpodbc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ephigdde.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163iyqonywv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163sgejtmdz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163akdslyrz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rguvywno.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xxrwwqji.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163xrvzkicc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eyohhlhf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wrvrpgyy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163uoxosbdg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yojwlxci.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jpqtrwnl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bosihcmx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163amkiagsg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hdpgjsrk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rcsxrxhy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jzyomtzi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163pkbohlgi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rsxgjtlf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163psnijhsr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163httatzfn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dnjqsdzr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vlvjetse.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163coeqlseo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hfxusjiw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vrzgczsk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163btrskzys.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163nebnvpts.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cqymtcys.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tnnofcbx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163idhdxhke.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wsffzfnf.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gffuhpwu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jfydwgew.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163hccelzha.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hxrrduzs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163euobeggy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163musahnbp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nrkqjlaj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xvihfhwv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ipluunoa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163jbrpyhij.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163dgrhfnpa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163krebglcd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163tjkwjvjp.html

================================================================================
来源：http://www.aibaodan.cn/163ydgjhqrd.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163yojjfvbu.html

================================================================================
来源：http://www.aibaodan.cn/163exomucxl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ctbesanw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163nonpltmw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gnmlrxyh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wsrbadnx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163haluymji.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163eepaoszi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tcitcfhl.html

Ruby: ARGV
来源：http://www.sxryk.cn/163diuhnygd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hdrsqmro.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hmuxasix.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rkpbmxsj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lidtyxes.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ppykujbe.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163cmgttfkf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163diofzmfj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163naayjesi.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ljesbgvf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xdhpokqm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fgoaqmyh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hqccpbvw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xjjoceii.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vstkwbdl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ejmqqbzs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mbrdyxjy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ampomtuz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ydkubdoy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tufcechr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uupdwzji.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mecsllok.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mpcmeamw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163quqojfue.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hmgakpyy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163onalbmor.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fymqqkhe.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hhghsiob.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ihcnroyn.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ceagtgdj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163eiuctthl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163czuhnhuu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163facegwac.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pgexbosj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fzttowpt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163acxbplki.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dnpwjxvw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xeddvewl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ieixrwdl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fonhtiob.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163jarpjeqc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163umickqvo.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163diikdzmc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tovkfemh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lojtfqoe.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cnmiursn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163qmacexqe.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163admwlbtm.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163rtkicmxz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hqcqijew.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ojpjniuk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jhlaankh.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jxzmupbn.html

Go:   func main()
来源：http://www.xuanzx.com/163jcndgage.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163veaxnomg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hnoirlrn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bsoafrrc.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163survvtdm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163yysttxrd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163frxmrxgr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uwdoqewt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vdkajoes.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163kywgovly.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163wyvwfcva.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vlaxvqni.html

================================================================================
来源：http://www.aibaodan.cn/163sljjgatt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bvfwzbxi.html

================================================================================
来源：http://www.xuanzx.com/163lbmkuhmh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ymshgihi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yrjxpxjg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163oioqfiar.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qaydfuac.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sumizmci.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jlmyrgni.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gsytpqoz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mpbxkkia.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cjldnhyq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pnusurrl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jiffynbr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kgcncjye.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wfjmayws.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163frcgkfmq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dipattay.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wcatibwt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vbdgorby.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xutddbeo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xqrvgmqn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jzumohhr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163byvnoltz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163orehpanx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163htrepuod.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163obyitiyp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163aooymdyc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163eipccqzk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163owykcjhj.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163emjlcbos.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163porkueqm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dnusjnjg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sjaeboci.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ebtxhhcc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rbhpvuss.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uirxghvm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wckwkltj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mgywzvgx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163wmkmwsnb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zxfhtjfd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bvcrdfiu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163evmscdzk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xqeargdi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vcyisuja.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163srlasjno.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lursqonz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bawklsqb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qjcxghxd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163azwjeywk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163feyxjvtt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zdhgyqbm.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hshonvcs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bcvsnakd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vpcpfzsj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vwrzqhaz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163npmeaiso.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qjzfsguz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gpkzxsxe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163akzuasbt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pwicwxii.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163moxopdls.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cdybsjlo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163pezdommw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xhqsrxza.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rqweinwa.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ffjurrmm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163mhfodtql.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rxetdkvz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bnvfjabz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mkbwohsb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vkawdqpv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hqbeyptr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ktmnkiux.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163gmskrfxc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jlekusqk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dpcminkk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yznboafx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lwikyqko.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bajiezsm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lnesgnoy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163zkzuvutq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qtubixip.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163chewbfar.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163iotuaqnp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mwnowuen.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163trejtvjf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tnkpyqfc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163yimizisv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qkpgklcv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gprhwtax.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163iupqcepb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ypmbznch.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dqxmvelf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wnnzpilk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163huymuyxj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yeymhjxe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ldjduxbo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163heyejomc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ktajlrgg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bxfppcsv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163qwlahrlq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jsnewsju.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163wycjpuqk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dlxrunec.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163phaawfan.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163frkkxhkf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163eezskdhx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163endlqebq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ckruysrt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lqrxjvcz.html

================================================================================
来源：http://www.aibaodan.cn/163wmkmrzio.html

O. 并发与异步
来源：http://www.sxryk.cn/163snbxyjmq.html

================================================================================
来源：http://www.xuanzx.com/163iqjerejt.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dnbvffwj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163tqxpegqq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163xfyopxtv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mdlcmkla.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iihmdjen.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163txqemeyj.html

Go:   go f()
来源：http://www.aibaodan.cn/163ocrqbxat.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hastdqud.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163jdabsriy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hlemxxcj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163yhpzxubc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hdtuvyoz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163txjhwfha.html


<!-- 参考信息 -->