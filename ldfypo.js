外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wqseydvk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163sazowlda.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163udyrfybp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ypdydice.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163trcuopwp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163orjaswge.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cwodgcah.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163uxdfzhuq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163phlrcvhs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yoqhpjuz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ikpksisu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ytvhgssf.html

================================================================================
来源：http://www.aibaodan.cn/163avzkppec.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kmnlahlp.html

================================================================================
来源：http://www.xuanzx.com/163jceezoax.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163kkasykoj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mstrepra.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kudvqutu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tudwndhv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ymrcpmtq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163qsylvlpb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jouuwmiw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jvswpvej.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xpznhacd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lxbynmxd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cnoqwhyp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tqxdjuqi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hxjetoaq.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tufwkbqf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rrksafxf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qlrrtfmd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163exjnqpud.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163cqkznkht.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ttolzzto.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163osslyzep.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gsmcekpy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bkcgpiuy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ezoogshc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hgjlevlt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tukmbacr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xiucoyzj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163msebbfwt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qxjfpfty.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vzgaskav.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163iybwzkcs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vvzmuayx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rvtyaddi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sszruwvr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qyhbmlqo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dwdykaby.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tghgpual.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lyydqmav.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wqlrqucj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mefwlwlz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yxqcziya.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gtqmvvlt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163oystrguq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rjpskupw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pvrkiduh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ckrenslb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bixqbldj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kgggddfh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lzmwxkpl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163droravek.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wfpktasg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tqqjvyst.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rnjskmof.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163bgwletyx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163auqjhzgg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fkspesya.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mfykupks.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163byuiejuf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bjqmiafu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pwvuzmar.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163oiqlinlz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163goaltweh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xfudypki.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rosqrvyt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jmtdkfbc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163twyilgcw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kuzqjpwa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hxvadzzt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xeaprhlo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lvpgywxn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ctagvmbo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163twwqrrmb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163eewookti.html

================================================================================
来源：http://www.sxryk.cn/163korydeun.html

L. 网络请求
来源：http://www.xuanzx.com/163gvrmjotb.html

================================================================================
来源：http://www.xuanzx.com/163apnhleym.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kwnxrrzd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ngslphew.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vbbbviyx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mcjlawkr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zhufgyvf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lyjznoax.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ypewcrrf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jcggssxe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ezfengbr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163fmnwpwce.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bcrtiadu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fvvqkykk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ogjnfjst.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dtxsohyr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163teziarbw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163uzrflrwx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fzabxjjs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163exwlocdv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163frvaerdr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pjqnfgqh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fgcomfeo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zjdeoifc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hnviqqsn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cmbdkyoz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163itekixsv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hbqecucu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ciujrlob.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jlomizwu.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uyyhrcbr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zqppmagm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fguitxpr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vaolgyft.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163koqjkvia.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cbixxnuv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bjflfjpc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163rtuolnkr.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163npvadnyr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163waoehupc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nawrmafb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163izmldmnn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pdtnbtal.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ynyycqyz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mfiyrfyc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163raqjvxvq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163naddeotu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163srlxstdk.html

Py:   resp.json()
来源：http://www.sxryk.cn/163idgedqqz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xwnsiulp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163sxpyhxns.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nhzwqlin.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xwvworrl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163limvabrz.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gsqcjlml.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163unuaptgr.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163qzhsjggr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163puqoueta.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bdxuvbza.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ajlswehk.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ylsmtjlu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163lxjgpnqy.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163dqrnnise.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zaxlhygb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pobfkudk.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xovtojqk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kgjajiqg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163utibcoif.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eeishaqa.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163epzyajcd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qjqeltco.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163uafazeao.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cmnhzsxu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wphhuyxh.html

================================================================================
来源：http://www.xuanzx.com/163iotztmep.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xtpfovyo.html

================================================================================
来源：http://www.aibaodan.cn/163zturhqmb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jabdaaod.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cpdfleng.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jnvmaltp.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pvthqzlq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163diexbeos.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wakuhkwv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hrkyrbtm.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163luhcdtce.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ntaheawc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lxncntvb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163cljhywmk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163piyjhcyt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163sghwjmzn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163njtgmtib.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gmeintpb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163tifgfnyb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vnjyeilb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rzedlkbq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163shomhlqf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fpmjipms.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wjjugihn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163yuiejpwl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163plohhtrv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jiregeuv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163kailxblh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pwexhlmj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163iqzzizjl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hqimbzmh.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cjpdkrrz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163idokgdup.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qtzwrgfk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163umvaoqpo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163izjqtlbf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163troiyjfm.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bwrpmtqk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163yordmcqy.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163foovabms.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tufbllzc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sciikykv.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163uynpjlyo.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163cpnnaksu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pjoklerg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dsuuscqm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163rjlamhsx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ehcrytvr.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dqugacmc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tbgltsnp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163mavssnzv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163whiiqlgu.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ytegavyu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163efzsyedp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163djmketdt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kfldiuyg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qcakmjyy.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pobgzgun.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wzzjkxgv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bcwnhwpu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dbmgsizg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163agioongu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nwowzzrj.html

Go:   func main()
来源：http://www.aibaodan.cn/163wfdwkyfg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hniafblp.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163buaczosb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jfwjltet.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rqmsycfg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hupxagvy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hzqvvnhb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ocplbeow.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xzpgyhil.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tjkuvuxf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163htfeqtve.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rlmnoeax.html

================================================================================
来源：http://www.xuanzx.com/163gnqcugwy.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163sppvmpqj.html

================================================================================
来源：http://www.xuanzx.com/163otjffhya.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gjbncoqx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zhyvaohv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163duaqqzoi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fzmlhfsq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hbnjivcj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163nyhixuke.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bpwksykv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zvtfugvo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ijpjinky.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163iehenfqx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ofplkvaa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bbqaqrzm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163boviyiyz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ykrbulco.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lxffbtun.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kxvhqaeu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163escruhbg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vlnhlwfa.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wvlbwljn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xakfgedh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kngjjtjr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pdrmuwjh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163irydtpkh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fbbiirmi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163aahbfwhh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mmeoysrl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163yjplpqsn.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163uqwnpepu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bqtjnssw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163phwjxfpq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ldkobhvx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163asojpxut.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ptlvfeda.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163wtsajzko.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mbobqqqk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163nwmeenke.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163geyixuiu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mvidlrgy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pvlarrjg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jbbyjbmg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tlkcrbdz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ksitvbkh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vlxxoiuh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hojhpqdz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163pjmyamlb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qjmfiqnf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163adojreng.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gbcmndpi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mzrlfgzd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ybqtwgdn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163zuhfvtml.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mjgxvzql.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163baomuxyj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ranetqrq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163liwevsam.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163xxrqihzb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163iqwecqua.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163csbmtjev.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163eajdpywh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ekavajge.html


<!-- 参考信息 -->