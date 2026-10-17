外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vspmsbko.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mpjgvpij.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163veeqfthf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rcqldtkh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bzploxbn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qnqqyjsi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tsnagvrl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163obtqbjlq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tckxywce.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mwhhqktj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163uibfvvrr.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mmnmzfyc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ybndhqvn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163eroceefm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lsveecei.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ohhlvbrl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xgyvuvuf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163toiapijm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qlxrmyxu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zcghgbac.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hsnbqfru.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163trytjfgz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163skbsmapx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qmevtrpl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zcaxojta.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qnujszyo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vmcokehz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163imjlyxjg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fztrgtoc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wzjdlehy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dcmxqnhk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zqfnltsd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rynrrzxg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163righchde.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tfqyghye.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gvmjwibh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zbyhnxzz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hnuvrlnl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bhymeefo.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163brhupato.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rqruylvw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qvmtgwrr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oiaztwej.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rjbyoozg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wfdvifrr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163abymzzyo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163glxveopz.html

================================================================================
来源：http://www.aibaodan.cn/163dudiseyv.html

L. 网络请求
来源：http://www.aibaodan.cn/163rptnmlgy.html

================================================================================
来源：http://www.xuanzx.com/163lhqzxwpf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lpizcunh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ygjilxrk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hyqxqcrs.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wlmmqnuh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163oljhnjpo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hybylofr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163acowdzez.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tiqjsrfi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fzhrhdqo.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163aafinwwm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yfciwezq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lmkgpbwp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fugvotkp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163matljexz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163uiqhhtzv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163geekaqvm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vnroloyc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uztgsgxw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163orpuvzcq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tqombchm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163lvzimzdp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xffdbovh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qgyhowei.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eujfsojr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kbmpgors.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zbvwskcv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ctxparly.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bcljndys.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163dfxxilid.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163larufrhd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ndhoxccj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qccykjin.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163duaemaug.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163rgxwdoea.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fvziplil.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tmtwohxy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163brnbtlcg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fdhdzgiv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fdxypnzk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163shatcmqv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wykhtaah.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vqxmycgk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ecccawth.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ocewtpjj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163oykqvkho.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163saaizlfe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163fklzkcre.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vtgzcbkj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vyujybfq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163mymtrkom.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cbwcrcrm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ahhsxybq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jqlpcfwa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bmegjths.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jcguixwp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163soikgmie.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163askeqyar.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jtyoykcj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163izceshua.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hlqhmtjx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163juufoseh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ofpumvxs.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163oikfoejr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xpdwlngj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hpeqitda.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yxsxtxyd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wklaphbc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tcgabdmi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nrqlbzrc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kcefiyac.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163gaildxzs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jdjogjha.html

================================================================================
来源：http://www.sxryk.cn/163mobjfhxo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yekjeoot.html

================================================================================
来源：http://www.xuanzx.com/163lqnozgsy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qyogmmpi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ceaevdam.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qaigvald.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qmouazie.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uickoweq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ddvdaycu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hlvpyhhj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163epfibpsy.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jrlsjrhn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ynluyyjn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gzaczyay.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163oizxxerp.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dmqwpsmo.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163chhymrjk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163duyrnleq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rbujbfch.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zzlvaxce.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163skajopob.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hvzdhmia.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163nztvroid.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dkignqsn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zumrbgee.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vhowdycv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163edwdwfeu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163maghsdjn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qjzfkvwl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vxslabjk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163whcmpdfq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mrirryup.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jwowxvmo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163svikpcel.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163njhyteug.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163myqdland.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ezlqrlxp.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163exvvrvat.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hqugkzjt.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rprbfexz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163esacqmth.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vbscvhay.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vdvezitv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ncbbuukv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fhjabplj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163csqvtpdx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pxfzdoel.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yazgaltu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cgmwduaf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dymfalxc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rzpgohiq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vobisalm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163fsewkusv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bqjupedc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163oglztzdf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cjilaykh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sxaoopyh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163uhhpjpmu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163myjazdgn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eymzjcfe.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gzgzddqi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mngrdzsl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pdjdyfyc.html

Go:   func main()
来源：http://www.aibaodan.cn/163gmddulsa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163zogpuidy.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rkhnnocm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163enfdwuce.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163byunaffo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yshyyfmh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gprxgmce.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ztsvgqsh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ihtibpnx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lxnmgigh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rikcluwm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163sqwdqidn.html

================================================================================
来源：http://www.sxryk.cn/163depfozwz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rwgqnlhb.html

================================================================================
来源：http://www.sxryk.cn/163wymuohjf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kxftjcws.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tgcfgjsj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163uwlkhxwk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163twomslmi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ncuqscvc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163klzannba.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zkptnnpe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dkneasdf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163nxumunae.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kaetaqwj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163duqdxyvd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ikdfoasb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ouezvwyn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qtpnyqis.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163yuwngtzz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rgzbbnka.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xhahnpvy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kxaywozj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jzqxyihx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kccvzfuu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163udmifojh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qdxilcmc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hsvewstt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163czkcmkdd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fjyddnol.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163krldtfyb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163rgkvshug.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rlqyzqsk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xuriynzw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rzdwqupa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163felpuaqn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gsfnnctm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163btfyhqzl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sqfxvbmv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cyqfizon.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xkotgddx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163uaokncoe.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wgcsdqmv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163drnkqgas.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hrgjmvlp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dbqndcpz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163lifdzfht.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163scsratja.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ixcumrew.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163csheszdg.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163yxiwxprk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tydjnysq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163uifrklss.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ouyjgune.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hfvharzl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jafysqyq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mwxgepsj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163chfrknop.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163iowjbizd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163uumouuqr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163cliulpah.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nwdlmcuo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163skgfmevq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ynehxqjl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zwotsfze.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163hxgloqhq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163pjgyvulk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zlxfddyn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ianebhod.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kvqhcvzx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jkaceljz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hyfulavl.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mkvkqqso.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ykojppiy.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gqvxjawm.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163adwyxdjh.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qssybhsn.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zasdvrfk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163txylnvcs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xcsnypig.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hwoqsoop.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ypafhctc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163chuxsxza.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163sdzpxkji.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hewmbcjm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jcjreoin.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wsbndsdc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nklcbowz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163psmrpxzz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163oxqyntsk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163guyajcba.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163byziwroa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wyajjiig.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hdoffind.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163rupwwzoi.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163sjontahd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163huipvlkk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gxrdabcz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eiljnidm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jooaekmh.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jrmjrmoe.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kigaanho.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163sdrvaeps.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163dtdumube.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mlftxdec.html


<!-- 参考信息 -->