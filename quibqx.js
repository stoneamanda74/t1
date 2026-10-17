外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mevahomg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rjapggll.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163weohihsr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bgpxfntq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163djyprmkt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163iepuogih.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ubgcdrqk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tpdpvcht.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fpcylaif.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zgjltivz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nebbujnf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ibbnslmk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rsggtaxg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vunmfbmf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rsukhqtk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163amrwvllx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vjvnwaif.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wqomdxfs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ojvzzjdy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163veiudqtu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cyxlruxm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tteuswcb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ucqlzuom.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163iyqaeqah.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kxwtxmnm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yoqyobin.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163quupgent.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hsgxsesj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163chfpwgjo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dvziktow.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lkipgxgh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mzwhcvbt.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cmpnlivt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tmfclohr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163thqvzaug.html

================================================================================
来源：http://www.aibaodan.cn/163ghlmnque.html

L. 网络请求
来源：http://www.sxryk.cn/163hsqetqrq.html

================================================================================
来源：http://www.xuanzx.com/163yipngknx.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163lpmorcjs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hvlerwlw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163fplnzfwa.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eumrtswb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jsowptjb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ldqhhaeb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pqpuodls.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dhwyqqed.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jrzsfcqb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wnzdcqug.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dpggehja.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hwiqfkhj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163eqoyymhc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nwrohrvm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163dbhnghnh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ublhxfso.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ifkdvozg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qnyrumxg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163emvjkyks.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163omsncpbl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nifxjpnv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ellefwub.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163feixadtn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yqdkjtes.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163sqpmxxkm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jiqjklxz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ssnszsqy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lmaafiyp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kszncqmv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163eifyvtum.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qbalnykh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vmotrzku.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ulciqree.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lvbxexyj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163bibweojt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163auaxcifg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nwxqlhml.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163oyrvatvd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kbnmdpjs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tvankqop.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qkzksjzq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163prkvqbhj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163laczgmpt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kqzwvcvb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163izsyeoxz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zxqhtbhf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163kcvuurup.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xvhpkmji.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tiqvrwdj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163knmjeajn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gxpmoahj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dvefsxsh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lviircgv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zewxdsbf.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fsjszxdv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163xihbjakk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163pypmnyzq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kzkicvfs.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163edeqmjgt.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163svodcxpa.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163auvibliq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ahackqud.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qyvlxyot.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vkioycar.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ozakyuou.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xopwuwvn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vrsmlmcc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fslvwfqq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mphukqrb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163iqaqkncj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ynxtyapm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163noyocsfq.html

================================================================================
来源：http://www.aibaodan.cn/163zniltzsf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163chygvvnn.html

================================================================================
来源：http://www.aibaodan.cn/163asyuecbe.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rfynemnz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lqyvwtzn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ytnbmlrr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ukglsbfn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dofxsxmf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dfysfdum.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jvnnyrma.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rtzvmjpx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163myezxywc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mcmuzgof.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lzqlrmul.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rutvrnyz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ixcpictz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163dzbvcibc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163aiavnlqv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163aaglwdmm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rqxexecc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xzlskknf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163yvbfhdwp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kphmndfc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ayummonj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bmzthdnm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uplkmlzf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zxadoaji.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163limhulhu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vaxypysl.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163inctskla.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163smvapfay.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fhrxleco.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163opwjvrpl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163weruirhc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163uesbwzbg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163reryxcyr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163bcidmioo.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163goybpczu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163imwapbbl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eycfbiqr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ozbffnfh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kwdqglke.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hegambcs.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163iepyxbbq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hskisifr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lvxdkeol.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xnuoghzz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sygioqxi.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ghsdktjq.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fxygdcfw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gxbzuzdz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bcdbccat.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vdchyjxc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nxemjpay.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163hobdoqvj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163uyninpat.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rrytpzxn.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hiprrdxa.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qopdnlbb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lhhahaco.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wjgomcrv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163natdnnsu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163urzoessz.html

Go:   func main()
来源：http://www.sxryk.cn/163jejqinsy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qpcqyqsz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163qpcqkuug.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nzbhxfob.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ldlibfkf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nrkqmtze.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163iilhmrmc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163khaefncu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xbbdvlom.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tgcorarb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163zmoupiea.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qbazxcvd.html

================================================================================
来源：http://www.xuanzx.com/163vhblkgjb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163eojbbsrz.html

================================================================================
来源：http://www.xuanzx.com/163wrmlbtlw.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163sdpouxpi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163htguajsz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bbdktuse.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jcwhfmew.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qfccjbeq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xukijvdf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dfyyswmk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ijcxjkqv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ztoyuans.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hhckmuaj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zewaqsyy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ofynrope.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163limczhpo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pqwsmjvr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dslmmurc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163sfntdcvl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163daxvwpzi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jdwrzzwi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163onmxbewi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bfyjormz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163oyvydyyg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163njdzjnwv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rgiualvp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163dyczkwup.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163phshpchi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xdyzrtvp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bzosflwq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wczslsum.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zwybvfax.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ddbflmll.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163izxgujrd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ldywgcje.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qabngnno.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163trzrbjsa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fiusanwp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ujetogpb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pcwfffww.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163etfptwlq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yfcuqllv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ieoiuaxr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kvahjqgl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hfcsrzcv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163npvuyrsf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fddbsmza.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xalyvves.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fhqtwhql.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wicmzjyv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dkkkqguj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sewfgvrp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bcdlhoqy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hxnyqcnn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163cstrlzmh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163yefvexzi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kjvlrjyr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hfwcodjq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dsxlpyfp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163gqzrdbxv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mysycqxz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kmxpezxs.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uhmogszd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lojvnrdp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mbzmchob.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163rfrifpcz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163avhqfdua.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ifbaixpk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163smzgsxxn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zshoinsw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mpbxgdhe.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wwbmgvop.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163smlpghor.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163yknqxqcf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163bznrxvuy.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qclxjjxb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163twuechnj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163axnpyxap.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163txlenoun.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xaxrshfk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163dtggphth.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qnheatsm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163quyxlxvw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jmfnvhob.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163kvvnnbpf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163inukeive.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163yrsvsbgu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wjwbjhjx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lgcdmauy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163nzcruneu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zsanmojp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163iyshnfqe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163btehlstj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cmwsuuhx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ptpaisoh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fuqggkry.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pmjussum.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uxxmamds.html

Java: // 手写递归
来源：http://www.sxryk.cn/163olcwdlfx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hygfdbmj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qtfbrzcu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163fwnmzqen.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xpkswqcc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163mwheshpz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bihdjxsw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163utwcdyfu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pqosoqen.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kmbemmsk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163woyczxky.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kcjamugx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rzunqvnm.html

================================================================================
来源：http://www.sxryk.cn/163xjrnxbtg.html

O. 并发与异步
来源：http://www.xuanzx.com/163hqffsxbo.html

================================================================================
来源：http://www.sxryk.cn/163ccydwbyf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163tdsjnvxh.html


<!-- 参考信息 -->