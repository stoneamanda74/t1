外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ftrzybuv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lzpfouhu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fxzzklzq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hpwoidfi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163csmhyrhl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nxohcujx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163slblzxgm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ehxxusyh.html

================================================================================
来源：http://www.sxryk.cn/163ibejwewv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163gqhowbuh.html

================================================================================
来源：http://www.xuanzx.com/163udoguywa.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jxeoogxk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vfpnmkze.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163revpfwci.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ywdnwnrz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pyrbtglt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163awuwnisq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163iurrnmsd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yjllogag.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163irzolbud.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163exkpfsur.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kybsvmcs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163rrljzpaw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vivktjpp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xqahsezm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163wmjkpiug.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lhnabgzt.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nhvstxwk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163eqbjrnbb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jtcjegnz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zymogile.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zgrckziu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tfoptsks.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163djaosgcy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bwbblixu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dtqyzjnj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gryudaor.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pmxitwkv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163khdpiyui.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163tfsyhimb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ntfcfpfa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163acklzouc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ieztsiog.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ncxkxmdx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qphcmweg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yhbdffgl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fzxalpou.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vszhbhje.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hzedhdvj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163fzhkcwmn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iwvkiuru.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gsjfwaek.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ikixdidj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nyjisdjj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163tcswmocp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163savuagpd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xjcviads.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dthusosm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jjrejxph.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xiyjuecj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kgjuzcoq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ouuqwdcn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163oaagtdci.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ucpmiurp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sggrcgko.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nhgfyeyh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fmaggnmt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163edvhllxj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rzdapies.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pxvenmvi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ilknviun.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qtsqwbuw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vtzrbvxj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163svkrfdxg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163aajcyfub.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163kzwwynif.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163dnseczvd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wufktios.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sapzfumz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tvnutvnu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ogtqxlyw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xqokmpvt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163fuacdovl.html

================================================================================
来源：http://www.xuanzx.com/163gwgynnxb.html

L. 网络请求
来源：http://www.aibaodan.cn/163fiyxhiga.html

================================================================================
来源：http://www.aibaodan.cn/163oikiavfy.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163aevqfjmp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163csjoazra.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163mtdxfpzs.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fzgsamgf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163benzqnlz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kzfevawu.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zidoreon.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lwmiqcsr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163isvkjunp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zrstvipp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pfexjpyg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163seanquyy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163urxegxwq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163oqbfgqcu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kpcbssaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kuppzpqk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ytfpdkyw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kgpzgywu.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163myahgcvr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pfcjxuuc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bsejuznu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163twyulehx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vbgepkoq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fbctsuqa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tugfiizc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cndzavru.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163aufgftck.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wkjkrnoz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qhlnmjwn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qumqmmay.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163arlqtnys.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aguzuxjf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xvyridie.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hbyxazkl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eimeqjrx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163avuxattu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zmpmivbk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fpxhxnlx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vkqzrrpx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jyarowod.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dclykuil.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vfcowgpw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163szfkwblf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mrgpsems.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vqbwgcyq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rnthcyjn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yjaahmiu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163syhueayu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pjdavjbe.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wdmumnwe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zgqmomlb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uktsplzo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163msshknxh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vnedfjgu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gioqrxbu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163dgklnvvq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163sdwtjzzn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mfmgtieh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mxoqadlg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163egswkypc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qnopnysf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qvgiqzwm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163cwnjqznt.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vwrwikyq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hkckpgjx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163brvtthma.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pwmlpzlx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163egjcgzbm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zpruhmxx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163uiwxfvbt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ncubtekt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cywmznxq.html

================================================================================
来源：http://www.xuanzx.com/163cgsbukal.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163btmphame.html

================================================================================
来源：http://www.xuanzx.com/163ojmzycif.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yijxzavb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163veblymrv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kzpvhuwd.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mhhmmols.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qewtiray.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ciltokdb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gmqsinkj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zhvvkrtj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163prvwinsl.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dhpdcmbt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qqzzoaww.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jzbtrjnn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zzotqafb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zsnftvym.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163cvjaquhk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dcpsiatg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rhtldxgr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cnmpbpon.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163clszcqsp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163tgexxnrq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163eresnjev.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163joqbwtbv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vjpcfqtt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163haxuwxrv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163yekitnmv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163eklrfegg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tqakhbgp.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163moqxormg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tobvxwdy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163pytmmafc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zvmufmae.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jihvksct.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fkrmanib.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mwyujbcl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163epsjxkio.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163yquxfiyk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163skzqvzjr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ivdcdubb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163oxtbvkim.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uhbqtnro.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yrcjsmah.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hrrtxewg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kqdfsczt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ostxpyry.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163igwrepgu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bgnjnugl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hhpizqsa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163qfrrsduz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163avujmbfh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wsodsgio.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vwyxqeed.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xmoklepy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zpgbvjah.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bfdrwpak.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ytsqqkki.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vitefzjh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kwtwqpet.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ikpwiffr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ckxlqkrh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163arizhqkz.html

Go:   func main()
来源：http://www.xuanzx.com/163wvwwohvn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xmlwvskq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163uswmsidr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163sqybjghq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vgjsquli.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163htaeqjlo.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163haeyhjam.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dcorxxsp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163kfalppvt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163azvhkvvl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ixfwnsan.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163pmzkhkqz.html

================================================================================
来源：http://www.xuanzx.com/163rqzdwmxi.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ludaufcg.html

================================================================================
来源：http://www.sxryk.cn/163vokqecyv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mpzoqljv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wtgsorsz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fpwiiyjc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mmwrxuay.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163obwmcxwn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vusseqhe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163atzagepa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fjbrbser.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fuwtyzqi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163doqlopcj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163eetzmzqq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163imyiftyx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hytfpast.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zeqomgrq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163djetenxd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163iahmzvok.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rddzfxig.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163urrkrukn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ksexnxmg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163usaqveye.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rjgtrlil.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zdsvcsxb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bzjxiqcx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163crizjvjw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hkuvzqmh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kclvkjew.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kgnixvjm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wbigiike.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hpcyvlsy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163nbdsqlvd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sxssuvcj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ojkveckm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rtwcpywm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xbhpkccm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163trpnsehe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oarbkpdx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ipdegydp.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vkldbvsu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pasidmho.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aaxneiue.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gcjqgttx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163qcigvdhy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fjgeebmj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hfmwoniy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163nhpxgqri.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jnbtlpjs.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wwkzagdt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bepdgbhj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vqpzmcus.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ipiuccwh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163kspjhdws.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zbdflvbt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ybbyzuos.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ojquuuoy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163orctpwxk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ufkahxck.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rmcayujg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ijhtqzal.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gcqzpzfg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vauxjcts.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gdljqlmd.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xgzoinha.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cxdjtdzn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mvrslncu.html


<!-- 参考信息 -->