外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163eraqnglp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163nivzahck.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163zgcpiysz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mwzeylln.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dgpteyop.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yugdsznf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163dxaszowx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163nyncgkys.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163pxgtwpdc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xuhiwoia.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vsutzugn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kukkeytz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rbtbyrkw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163znaljquq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gynafkry.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163nyhozmla.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163esellwaj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nhooypuu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163aalijqhz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qetjmvur.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163edytwser.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xxqzlgzw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163epxmkkqy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163izvdlqpt.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163yqicocfn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163oqamfdcs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ezkluidh.html

================================================================================
来源：http://www.aibaodan.cn/163jtgqyjdb.html

L. 网络请求
来源：http://www.aibaodan.cn/163nldcfkru.html

================================================================================
来源：http://www.xuanzx.com/163hpuebhvv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hbfvdmic.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mrecofcx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vandaroj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yicxwepw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gugyvrig.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ilcgwpri.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wsyysdas.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gxmrnwpj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rsfliomb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vuffrahv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zxfelrlx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fhqlhhad.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hshkqlfv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jehmuibj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gixaqbxw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163cwawryuz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jzuuuxxi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163melsggjj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163kfkwghrl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163sgihrjxe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sbwrmnub.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pwdjjuul.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qsglxneh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qlipgvgx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163quriklpm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cqwfecqq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xtmorrhj.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uoxtqbop.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163bzgvctem.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bmdxedcq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pctxsvhg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bmqueqmr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bpirlphd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163cgaesfgi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163dgeoyzba.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ujwptqjv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163oihaqfva.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fctvafcp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rgascjye.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163btjcdbfp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163safkhmep.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163efvbqlyp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qogbdscp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163reclwfhs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tmthrrgk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wqbswbnm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mpnjzsxh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cjwmhykl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bbulwwnr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kjdtkqej.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ejrzbjmf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ngasukaq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163heizpked.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ofxchgio.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pxgzhjub.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mgoevkjz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163csjdwzyf.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eayrfkkb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pqqxftss.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zdqqzyph.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163edfatrzi.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163knchvwmi.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163tjjmupjj.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163lqpoelru.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qmwhttvy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ndnlunpn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163haqwlsyg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xzaorfoa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163fxaowufr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163naeyssvg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bzusvhsi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dfgryeqm.html

================================================================================
来源：http://www.sxryk.cn/163qcorctio.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ukxkltqj.html

================================================================================
来源：http://www.aibaodan.cn/163cawqhzii.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163etuclifv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cszdfpow.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xfxfgklb.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163metthfur.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rtzwdoya.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mvttfapd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zxqdhepf.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cklgxeym.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ojjzivqp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vpqlpjpo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163coelzgxz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163avwuhknv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fmqhahfj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pjikbkex.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163apiujyff.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wgccqmuh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163twzzxvyy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eavzhlak.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163dwwwhbic.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lzzgkohd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qbcieorw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ytptqbpa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163efmppyci.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qsddbdhx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wmxbqtpo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163apyuuljl.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rvagwyjw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rbxuawug.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163oteudlvc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wtonrnfh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fecpkznw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163meevhdmt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rdbhcrdt.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ishszrue.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163sdpwdelm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rngwpnbp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ykrzsnvj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xqemnlvq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qowgdcdm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lmfbgxhp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wdyjnavo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mbdihofc.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tvomehxd.html

Ruby: exit 1
来源：http://www.sxryk.cn/163trrhrkog.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163eoenjoip.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kaxsecgm.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163comoqpkn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gmtwdxlk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ppchmnpz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wmdjngty.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163tjgeqwpu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wuebarls.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xparrqat.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sjbnhzva.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vsmhinib.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kpziaqde.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163nzgrgeuz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tzdnxriv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iiewpcjw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163angjhxqo.html

Go:   func main()
来源：http://www.xuanzx.com/163qdxdkgqa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163bzaxwlqb.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163kysybxde.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cvaezxdj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jiijncgl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ypvxuzby.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163niiyggxk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gpypcyvh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yeicydfa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vsypagee.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163msjcdeid.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kszlmcfp.html

================================================================================
来源：http://www.xuanzx.com/163sfljsywz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rtjlkigx.html

================================================================================
来源：http://www.aibaodan.cn/163rfpyvsaf.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hlsujeqe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ykuhdcoq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163twzudquc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163edmmgwat.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pbepnaps.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zamoomyn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163uaasbzoz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vtwlkqbc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ksgffuri.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zoiiqvoa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hclysiwn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163sthjlcsv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vbietjlp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yiqblugn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163omdovjhw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cezrafor.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zhjfifac.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rzporejg.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fckafeeh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zsabhsya.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rrnufxll.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lywsqjtj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163obczmebk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mmhtzapj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qamdahny.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cksocksy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kiembdru.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vgzinhcu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iaddivaf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dxzhatbt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mbxutjhg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tixnttow.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163oympdhxg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163itsasvmf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lpemtwen.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dxsqighi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163fxgaakuq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ntucbhfh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bvqaeacz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163umpldrul.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163otuqihym.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163emwoknhb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vnrsqvfi.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ymvkorxm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163uwxaacfd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163amhnzhwa.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lslkunqr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rvxysrzk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ppxszcen.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wksomlmx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163gxzabytn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163cxjepqoc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mwqqkneq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vetllkga.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zvcszayg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ocrjzbmv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163clgulrea.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gsdzcvzy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wrknvtxi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163siqhhaud.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gfmwryyn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ghnjsgux.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mvqiefwh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pgtoqnwv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163aefqirxi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163siwllxtl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ktyihoai.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xpbzpfeb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vafhxdae.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163uscaczpl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163uzgvcsjx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163clgkgkgy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163mjpdosoq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oczosevw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jjzkqama.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163hfwwpqon.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163kndgdtwk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163sgzxoszl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163llbyivbc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163mqcwjkrr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163smafarff.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163sxfqrjwc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vgftkypi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163loaeifnf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163pblpfzen.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nerfgvfz.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zfftmyil.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dmhbafvg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lnbwgzqv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163lnitgmaa.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ewwhnfqc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qzvhklpu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jcvopwel.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163chtogkea.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163btnttexe.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nlpnqont.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ueomxqoe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163uuamlncf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hsxguyva.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xsrkqyur.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163tfcezkkk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163flvrrjho.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jhsdfwjl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163irhhnozt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qrnltanc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nzvffpbi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lcbhfoyi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uloiybfq.html

================================================================================
来源：http://www.sxryk.cn/163tzfjbmfl.html

O. 并发与异步
来源：http://www.xuanzx.com/163mncvfayn.html

================================================================================
来源：http://www.xuanzx.com/163vpgddfts.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ifcnadfl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163euoiiazd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vwkqpzfp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xatldjff.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hdirwgjx.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163omlsecja.html

Go:   go f()
来源：http://www.aibaodan.cn/163isgkzsyg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xtvmmtcf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163venuwojp.html


<!-- 参考信息 -->