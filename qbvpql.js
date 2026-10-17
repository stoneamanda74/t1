外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163irekclgb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qgwtrljf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jtkbrbhb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dqddryjb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ybxyjelj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kxkrmoyf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163fxittxwt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163krabzqyt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hxitojhn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163rcszivij.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qslnhsdy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zxgrdzxu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fqhciizz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rvwxtyiw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163icqcvgtj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163roptxoxo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xhnqdphk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zyeaosbr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dtzigkuk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163bgnzszkd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163csahywfk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rxwmpfco.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wnwdjdgs.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bhntlump.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gqofctrr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ncfdnuew.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xvpcvzuj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zldvxxgc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163svbpuiqu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jygzqcmv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163itorcjlq.html

================================================================================
来源：http://www.xuanzx.com/163ufyxngfr.html

L. 网络请求
来源：http://www.aibaodan.cn/163egthinok.html

================================================================================
来源：http://www.sxryk.cn/163ewhyvgov.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163whqcyadc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jaqgkzlw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163otuekdlr.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pvrrpzry.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zqqjpkze.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vihypasr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163auvcqrto.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yuoqotwf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163nbgoalgo.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dzfkqjoy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jdlzcfko.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gidtinxp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jnqoudue.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vmfkmpbr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wjcwvdne.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163unkcmlht.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vxqbicra.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163memmhylw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163quvhucyl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hvkgtyqs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163syejjloy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fkadlruo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qkcrefyg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163wgurinpx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uxjlvgwn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fldfpwya.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163kdpzoeok.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nvesvwtr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163oswvpeqc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jatqazek.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bkszxpxy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tjscxjwh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cnzabtuy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nokwcpxw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ebehqrbc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163djqkrqeq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wlgyjbha.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vskkjdcd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bjbritvv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vsgykjly.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bnqwsure.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tjbbbfxg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163cofepvmj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wouroagj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fdicpxdk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163cofriwed.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ynpojgdj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tfsrqycm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ydayiwjv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163daehtmyv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wdiujsnq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pmrgvwwx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163icqmjuex.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ocbwfwhf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xgwgsofd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mnzynhxw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163llzqpshr.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cyhfsnne.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vykiwbna.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gedwhzze.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163cbtlpdhm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lrhvajmc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rcxjrysq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163devaymbg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sciburcl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pyqfoaqa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xrocaqcx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dmxbxpgl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163arviatmd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dacaakjb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163oefqkkwq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163iswqpufm.html

================================================================================
来源：http://www.sxryk.cn/163mzsnvvvn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fqeeoozm.html

================================================================================
来源：http://www.sxryk.cn/163vxiuxgay.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pqrgqaak.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ioohdwky.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mtoouqat.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hdhettzu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dxqmrxoo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163eotnwxht.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gbouoola.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163djfwbxed.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163duaavuaq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lhxfirxo.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cepidmny.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163umtyfpph.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vyemehig.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cwrmlqpz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xphoqlet.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163jiaraoci.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cdhiprii.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vxnogfct.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mixpzbyc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163rhicotgo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tmkbpkuz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cvicyjvm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ivsyzhfa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163shoxrfqq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163uwncxqoy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163evvegbaf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163inkyxblw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163znjfznxc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tosxizgg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163nqjaeplf.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163uaywadmx.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163tmklnoaa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vzirhbqo.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163kzlgsflg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nnmpwbyj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bmcyowhg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mmgtlebj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163yqgwvgxe.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163plohkmmo.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pbdbdler.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dhlkopti.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rdwvihyq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jxvxpknb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sasxklkl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163auifaijk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mfjxtmip.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163unvlznti.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163feahftet.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ohkyohxw.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163sizsfpek.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zghyakfy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163apsjgdgo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163sldkqdep.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zbdxmupn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ihrzujrp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163pqohcmck.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hmfualyj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163slxudauo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fichpdme.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xqzftcjg.html

Go:   func main()
来源：http://www.xuanzx.com/163coxjrzfi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163dazddcbf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lfyzsflx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163kojynuti.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dsdgkakx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nbguvnfe.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163njtgnlfc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163iadkgdqh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pnyhkcbv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zwtyzwqm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mhqkiayr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bvvbcpog.html

================================================================================
来源：http://www.xuanzx.com/163ieufezyj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163acccroaq.html

================================================================================
来源：http://www.xuanzx.com/163opyrgoix.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163baxujcqi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rlxlbfpy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163tobbbbxb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pubxqzkz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rceiacvm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163emdoxsrg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tquuyfod.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gfqoakfi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gulijnxo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yjcmsvok.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cnztuuyu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163njlepshl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sulmmjbs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jdqznbym.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bilazklm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kxvfwkqj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kikzxaqu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163weqlxsdq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gvgrofxr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dvwgokyz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163oosdvbts.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uapbvolp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cjgshlfv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163nfpjoext.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vpahpcxf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gerizobc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jtffcuhq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mfhmglft.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vfhyrefg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mfdmjwwt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163otwjhquu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rrepahbl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yzwhdlzd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ppoaelio.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cfpmcmcs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163rcfeedvw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zisauevg.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bwqvkklr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163lnlapiws.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ywstvect.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ppzzsvmu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163kcvzrzwo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hovegntg.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qyehsdir.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tslgpqxx.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163cabfjzhh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fqlppjlg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163iyhtrpes.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yueqyprp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vnaentpv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kbzavdwq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gizkilzl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ovajlwux.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163btbpnrgx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bhrroboh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lyigpvwd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ablfefva.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rwqtnlng.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163stixgqsq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rqfnnpdg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tktcpmwu.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163klhgckto.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163oglnjggq.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163elcnhmnt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163sqrwvrgn.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tesnyyxa.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163coomwyko.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163echjwlbe.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163cnrahpft.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163usgktulx.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fxrsnnoq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qzvqgwst.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jvnavbbd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xjnjrchz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163oegxhhbn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ktgyanei.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163msbfcvmc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ozxjlvsi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163eeyarfuk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163unzxwqyw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vkblytdj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163djgspmso.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ykivtmmw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qkhggtzd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gzlzjevk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wtumkwnl.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ounwveat.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kaynqotp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163goyrwznr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ragmqrrr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163orcikrjd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163izorupkt.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163sqrhqgcf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rlmzpydz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pbjjztsd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163whvsbrny.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oxyrklod.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163owzrdwxa.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ctyyabcq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bwlwlqsg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rafgxvdt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dwcdbiqy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163stitrhfw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ncpbrwtb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kmfwyokd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nanmktbd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163dawuzzut.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kptflngq.html

================================================================================
来源：http://www.aibaodan.cn/163ivhbkyaf.html

O. 并发与异步
来源：http://www.sxryk.cn/163mcxotdxe.html

================================================================================
来源：http://www.sxryk.cn/163ufrqahff.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163teyysfwe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ozifqwfl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163uzntqxdi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163nerqcygw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eppeyouh.html


<!-- 参考信息 -->