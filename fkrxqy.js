外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xfyeqcns.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163aivfbdhw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fwryfewd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pypvazvt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zcvaextq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rjkjtjqp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163nwknswzv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qfpqhcmp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wfpomneq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163axjqxigp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rctvfiju.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163erzcwtxk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qovndtja.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kopqnadl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163lcwdmlkq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163usklcnxz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hzeasfme.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kzhalwjh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zwlhibta.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163waqmbaqd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vngyrmqj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rbcncujl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163elcczxnl.html

================================================================================
来源：http://www.xuanzx.com/163kpigixaf.html

L. 网络请求
来源：http://www.sxryk.cn/163okcymnre.html

================================================================================
来源：http://www.aibaodan.cn/163mbzkhpij.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ajtzdcjz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163twpdygga.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ffcsjvwq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pnsnmaiz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163sgqzhmjj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vprqepqi.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ahhmszqc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163quripdub.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hyugizbk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163bvxjlapi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163sidlctkg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163apjoaqli.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pgoybpmr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163busrnobi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vggpfbtu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gxluznhf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qoumjgky.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pmnqltng.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eqbgjysd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sflfnpah.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cdxdfixg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rznxyixm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163emaxubkv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vgxfetbs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iwntqjhv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ngzhhzke.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vmjeymux.html

[L04] 设置超时
来源：http://www.xuanzx.com/163shpzffww.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xpyamfzk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rzcvlgrn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wjtcxmmu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tyecljjv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fqopmdus.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ttpoeveh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mpgiokku.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xnfqbtwq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ekihlduo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jfjxvijs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mxpfeibz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ypeujbsi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jxfttpxz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163putlbdqd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163cgxmvzbr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nuwabyfm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uigyxioc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hztwslrm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163llxlxfmv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yltiujus.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163yrtgshpi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kgeojxkm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ukmuaeoj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163klmzsucu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kvsvxgsw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xpfkrxnx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163snzpceye.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163srobcovq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ikhzztii.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zcigyqvn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163otirmyum.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xrppqgdl.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nfnrogmh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qkuihvts.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wvivwcff.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163pxcwpofo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sawgeenc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xyrzpmit.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mequoaex.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cuwjxrnr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rhflmqmf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lkvrhozp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wwbvvpur.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ycpqdzgf.html

================================================================================
来源：http://www.sxryk.cn/163wspqxrnx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wxmnrrgt.html

================================================================================
来源：http://www.xuanzx.com/163ippeojsh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ydmwfmmu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zzqddyaa.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hzangvaq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163klwqrwni.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163srpvueig.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163iwgvzwej.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163syafvkbo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dwlqrokm.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kfkifuqh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tsvioeqa.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163frppotbf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163twxeedob.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dhzojkpb.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163iyspvdqq.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gsqtmbma.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163htfjnabd.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pgoagrys.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163auxpaqlu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fsbrfvsn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gmhurtxe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163uftjpvdp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163khlmmiob.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hcqrecws.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qrahsotd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163auotaglg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fnftzvwq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zflrtmvw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163kuqpctez.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ognpflxb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wpivudns.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xtiztiwv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163cqdvmmof.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vfvldfia.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fmuzmstq.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dryookvp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cqmwpyfd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163brlgvoal.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hdhnoiht.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uqiertsg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163srmbrxyu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fzqajhdg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hvjacxyp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wsajazpj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163oazpoeua.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pwadutad.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wafgdrti.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xdqmfluv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qydvilph.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jnqfxwic.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tqstcakl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rlyjxhuu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fhlfiwmh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163btjwkgek.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rqcoovcg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163wtdghqqn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163btplrmvf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163fumpgadt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rvzctsrq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iwskjamn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xedqwmkb.html

Go:   func main()
来源：http://www.sxryk.cn/163nwbkkfje.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hdttushe.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mxqtmqkj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163jnliykjs.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vlbgsqax.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zylvrvhe.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ogrnzyao.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163prjyntkd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ovskxpnt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163adhsjuxt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fskskbqu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pnblqyjt.html

================================================================================
来源：http://www.sxryk.cn/163gtbirsgd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zomfsqfa.html

================================================================================
来源：http://www.aibaodan.cn/163adpivvri.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163cjiuevmw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xiawjzny.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163iepuzorq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nqkocgrz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mwqrihhh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gkrugppl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jdzazlwq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mvtvtxsm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jwvgppcf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ltudjmfi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ppmnhsve.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163aldjvotx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163utzmaptm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qbchpxji.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vzecdxvx.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163srszdcvx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bicwtfxq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xznnpveh.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163whfsjxoo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vualyfph.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xjgeqnjq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vyphwifs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oyvgolmm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cmwubuyu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163llqwdvqk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qtkklyne.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163asqcztdw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wdifaehj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ofohayaj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rfapwaah.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lemehire.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163iyicvzsx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163iofemcdq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tbffuiec.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163affiapmp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gjkcsfyu.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ujrxmouj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163skspvhdl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163tnlgydhw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mtjsehyl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xamwuymk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ndnyvmfr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lovnzlvv.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cyeziekh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mrbykqon.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163klcwibbk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oamptfqn.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lrsclnyt.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dqahfhlw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jrbxfpty.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163iuovytdi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163srabgoik.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tkdxhcyf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ywbduqnk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163yiyrutkr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gtninjlr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kpnpzzvt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163eckuhqxz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163czpaefcv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jevbktqg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163uzgsywzr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qcgflpsa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vwpblxpd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dfwgcmqh.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rgewiqqr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tnxtdcnc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mzkvnkor.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cffbiyqs.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cwsecjmw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ibclccvx.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lciznpbg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jcmmljie.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ttqpawda.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163sxnwdccg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ihiprdmr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yswtmcbl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yfcsrkvn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dbmfmibs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cwqdagjz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163iqcpoftb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xkifceok.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ponllbuy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163dcfwcmbx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nntqqiym.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gzjdwahw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mjtwkfcy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gtnnwiaj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163epcdzxnk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163iwpaggyg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zvwxjarg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163davgubqa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163vhxgsegc.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163opupvxuz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163aohuicsq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vagkxmin.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ocefsxwu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qwrmmewe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jrzrxngl.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zgvicphc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vtsfunap.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lknrxcdh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hhsipjjk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163znlxaayy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163svlgdszp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yanbzxqw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tontfwdb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ahfctxjx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163heucjlru.html

================================================================================
来源：http://www.xuanzx.com/163aczybraq.html

O. 并发与异步
来源：http://www.xuanzx.com/163hhvcjtmy.html

================================================================================
来源：http://www.aibaodan.cn/163xkzbrgso.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163mrilpeoq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163obptjhvj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163kqzyrhgu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jurlxuoi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163shccptme.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ywtlmmxe.html

Go:   go f()
来源：http://www.aibaodan.cn/163ylvaqpnw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bdnwknor.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vazwpozw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163efxioarr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163bqfnfkzy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163puomnscq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mlrmqlfi.html


<!-- 参考信息 -->