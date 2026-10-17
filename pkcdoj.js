外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163znqazany.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pvwnugro.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zozyjnmh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ttscfjoz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163bmzgvadf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163shnadgon.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ekolmsar.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gkkxghbb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pjvulhjs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163fxsadhwk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wciyglqt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xlyuxmse.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dbpvnhbf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vbjonvub.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163bdibmksc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163grqtlnqu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163cfidsiui.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tvrfwjcb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tpbvebpu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163sfghuihe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pxooivfr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pouvdqvy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163egyxwwbc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hiaxsehd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kfmrtpti.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qcliuqim.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zubitxxq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163uiooceuz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fpgdupec.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163juwlsvgc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bdtnoulj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jjcydgbn.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163nolzawdc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xmnnvxhu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ajhgngmk.html

================================================================================
来源：http://www.aibaodan.cn/163nxvdttld.html

L. 网络请求
来源：http://www.aibaodan.cn/163qzcvictd.html

================================================================================
来源：http://www.xuanzx.com/163firrbneq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163swmpvlqb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wthducng.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163psuqbvdy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jyhrkmay.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163kolkrlxi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163utvckmbc.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163reustyih.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tzzqhhci.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163nwnarzil.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cgifrfyi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yukgyxoy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xzlhfazu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dxwurmgt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ayjinvph.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163txslwovc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163suipskkw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bvqjcuno.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163odtqjuzx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ijfcpghw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163htuboptm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163eefvhejc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ykwbqdox.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hmypmkzu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eaqcxwtc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163flwophlq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hwcgxvbj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gzrbqfys.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wuwwnaot.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xzexkqxn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163iqhsndoe.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dduhztnr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rztqxgym.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163akylmttl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163elyreaes.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fzunhthk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tflfgywl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163lkmgnjke.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163lyxsqaqk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vfbrecvx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fxyxlfdk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fhdiwsmy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jjtjfhji.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163nxvwpmrb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lphkpyrl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163nfpegzpc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163dmmiyqqg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zunkbgfu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hddnvdri.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163nkxdtzki.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163qxwgbbpq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fgvoqqdj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163wykhbraj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163iuasniec.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163sefxwrig.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wccckvst.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xxoaeats.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wjnlsykw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eadpfuzz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163amigftfg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163pvclnehf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163muygzngh.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rjawenqv.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bczgzhfy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163whkwgrjg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163xziflajg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qnyohlgj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163onjbgqmu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xqyhxvfe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bvhusppd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gbstvpli.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fcrxxuzy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163bezpbdua.html

================================================================================
来源：http://www.xuanzx.com/163bvdjehop.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kgpobpeh.html

================================================================================
来源：http://www.aibaodan.cn/163vdxslkwx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ikkwjvjq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xqgivwez.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wdrxfbco.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wznoodeo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163aifejqop.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jisrcqeh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163waifevqp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163byfsevjp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gagnygqn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mbpvnfad.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vhkmropu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ddpkicux.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jbceclvt.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163wbkqldot.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mzwwbtiq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163idnzvowa.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nvfbyyal.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ndaowjmk.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bxcqyhws.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mgbsuqvt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ldsuyiqv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eskisozk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aqpkesrr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rvfcqksb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ofbgmtvh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ykbpfvuo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tfihlkzq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ckurhhko.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fhaglejg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dsztbmod.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lsajasbd.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163unrhuaso.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ozgrvgem.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cbzxixfz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bfgvwtml.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qhekmnmz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bbpcduuo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163biiyhfgs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163voycjquw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163achcocif.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163elwpkdbg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163cshjpmdh.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qfzxokri.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bturhald.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jpgqyymv.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163exigljzq.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nfyylvfk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163pprdcsum.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zaxianuc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jficlxop.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163gaqfdhpo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lwvbmjys.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jbivacft.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uixwogua.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163nbzlvlds.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163czskwnjh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163kgeogiql.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bpswedzw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163japrgmvt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rmcmdjxr.html

Go:   func main()
来源：http://www.xuanzx.com/163dqfpmphv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kxyspcxl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jmjwiaqj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jyfqgfyk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ixcnboes.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uxvyqmxb.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vxcxntng.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163faianzmy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jwnkiugr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163pusnfedo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163sftyvfrk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kadjiruq.html

================================================================================
来源：http://www.aibaodan.cn/163ichjjrfu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ojtrvhfo.html

================================================================================
来源：http://www.sxryk.cn/163fzuxyzvh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ybcikwbv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163elawjrzs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163nmgzsoal.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jzjvwssr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163refcstmo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mmabvyfn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163phlmywxo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lhsnwtrs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tnumaihj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qklhydai.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163grgjtoid.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mgyejujr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gpmvqsgv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hgbjjkgp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vhpkhvad.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nvvmflns.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qmmgybmw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ynjvrvtp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163lhwettpk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ebqnmcin.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qnbpmjhf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nujzjdub.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163moxuixpe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ysyrbhtl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nvzylabv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163mzpzxogt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kyjdppgn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xfnrwxwh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cyojmzzi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jxsodoww.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163flmwhrpb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kultkvtg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kppcvjvt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163udnenfvz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kplqxucg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zelugdws.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163anwixafa.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dyhujakg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163afjeodsq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hrwlnzdl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bttifcwa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qpjadoow.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zihwtlzm.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163sqoyytiy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163emfbklny.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163uxuhrqwe.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jrnxxkuy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zchvyezx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bnqvsoza.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163drodkspw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163tngfzinr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163nvhbpehb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bsbqzfss.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fuetffnu.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163yrnoldrm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163cywpcqfb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163byttawct.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xhuhrxbq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163guspqtum.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163nfkqdmfp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fayuahim.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163apufudmb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163sizjylbb.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163akjpkyzq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163oshniuks.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dwbtorpg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163diprpzwj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163utrtyirb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163xhvpirdl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dmjjovnv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nbhjnznk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yvojnjqa.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pxbaqrja.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wzgiseyz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lgrazzqu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163roesfglf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163luayutcb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ogjicpui.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ztjqroll.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xleslwip.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hbslxiaw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bdwwlotw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163stszgisu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163tcyoaaxu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163iqbztdmv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mtsfbdoq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bztpkdxu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lsnuczst.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163nkywzqzb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kdvrshgf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jxydtoed.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dxxydidc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tpavofid.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ivkfsmdg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gbtyaown.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ljusaoet.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163faaunkeq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163szdbamrg.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163igvpbgcb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jpvplejh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163funncfyn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jvrwyzyk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zxzegucf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nddmxzpz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163teybyubr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163srlxjmfp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qnkcazqo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sikgqsmn.html

================================================================================
来源：http://www.sxryk.cn/163elosrsha.html

O. 并发与异步
来源：http://www.sxryk.cn/163avofxkbx.html

================================================================================
来源：http://www.xuanzx.com/163myhptsgr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163wwfysuvc.html


<!-- 参考信息 -->