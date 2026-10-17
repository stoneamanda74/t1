外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163oghnpzle.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163iglxptua.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wfxstulq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163xgowweyg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zkafpqbm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nksbtjlg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wqaeubfg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ihplnuou.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163noodfvdq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mjvunmiy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wqbgmukz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163imewrgrw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163tzetyzgm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ngofarmu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ynxajjau.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vsjiajpw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lwbvuxox.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qszkxgek.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163brfpqtfn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163qyptgnss.html

================================================================================
来源：http://www.aibaodan.cn/163gjhueqgs.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jooscrnu.html

================================================================================
来源：http://www.aibaodan.cn/163prkoicia.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qiddwwmp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qsfqjetj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pxrtifvf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fobrldgz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ifoppjfe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ygpauhyt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xfpvylys.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gvrynjeu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nkymsiwn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163thlvwgdw.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163gmixsmnb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lppcmvti.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sxinzrpx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163brtgwzqf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yidaauvr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gqlpbofk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jqswuyvx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fypeltvq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kwxnzsyz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163doswlzuf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yvilcbom.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tpnyszhm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ddgjxdds.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ypoyslqq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hmktjduq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ektqfymv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ajqucfkh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mrgqhmsf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ntbvmoaf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163aiixspjq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vrsrwdzc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163utchhwev.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163foxfojva.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163csnsakwy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ernritty.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163acpzildt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163fbdwptng.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rvzkzugp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tndkslso.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qjowynbo.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ndyvbwmh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163viopsdjl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zlzpsedc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kftjhetl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tkbxfjhp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vbyhwgpt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zlbkrdli.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163quoubyzd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ckxnznvn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jrxmcfcv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bafpkzmw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yonrowgj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tdguxyvl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yolqjbox.html

[K07] 进制转换
来源：http://www.xuanzx.com/163raiaxgvl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dpmxndja.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tgsridyu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163muhhpfvo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kayrcwli.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163sjqonpnr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163tqkegahi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163svaffnvh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dbtxlqwf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wdtlhctz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163shpfhzoc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zzrixgxp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vyvqxbmi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ckxaafad.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ixjbzash.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fbwquabf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zepmobiw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iusjlcha.html

================================================================================
来源：http://www.sxryk.cn/163hhpvhfqb.html

L. 网络请求
来源：http://www.sxryk.cn/163bwhzqdas.html

================================================================================
来源：http://www.xuanzx.com/163bufqagty.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jzusesoa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163chcknnco.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rzugzyay.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pwngaxoj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fwvmpesw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pdhzbaum.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ctfphlys.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163iqqldgjq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qzfukpgz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ckndnxwg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yphmdojq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tjqcbqdt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oglwtyez.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163najyjyop.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163enbpvoxk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xhvqclsc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163pjjeybwa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tuexxtiq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hopnhrmf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sozwtnmf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ibfdvxyc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wgaoqolj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dkthxwjo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qmslhvyi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xhalrhes.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163exldhsxl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ibdsnhzg.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kkppudup.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163plvyxyxx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rujoluhj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163onatsdth.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kjkuuztc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zjqizksw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lxdfkpjm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zchhrxfq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xlcjuldo.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163akvejxqg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yrgblfus.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163cwhrbvxx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163plksqzcb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pygjsskk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163olvrnzez.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rcynxccg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qfurbpft.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xjjxpyxd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163avwxqgxj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fdcqwoyf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wdzwjjdv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gptkgnmr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wnfulgtl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163irlrpuuz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ekljplyp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163baucqcor.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kzubvmvq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xoovnfoc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dbddhkps.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163srmwoqbu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mrpoatzf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ilihjiif.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163baecexdu.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163cntjmehc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zibabtco.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rjjjthzs.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163fimofbzd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163sdezvnli.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163awpssmqq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163smzoihzq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lkjfrirv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163omjofgry.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163swjpthlz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jdwtgfhe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mngiovli.html

================================================================================
来源：http://www.aibaodan.cn/163qtmljyrc.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tswoldef.html

================================================================================
来源：http://www.aibaodan.cn/163krukugdh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163epbwevrd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jvmnvwkd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fwxbdivb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bgybtmcb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cseshaiy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qmhucorq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pxqcbxpy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163duyhqaso.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ksvixjty.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xjrsqvew.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vqusntpt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lhokzypw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vdxgeywu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ggaihucb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gotpvids.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163zrawmctp.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kgwfzxbr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kbnpjlmq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ecujnhyx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ontdnztc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nhhbgdsf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vlbjjyhs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zjjnbryo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qzajpnva.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iykjbuos.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mhkvzxzj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fpkvtxie.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163foiotvxn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163raamcwxn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jusfrqap.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163isszqanc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xkepvcxn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qinpqpes.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nkztwojb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163zkveezny.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lllrfbun.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pwkcovsf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zajggkbp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163wtaiijmg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vuxgjbjg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ijvudrkr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kbrubaps.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rotufpgj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nuusdmge.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163meevdreq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jcmveact.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163whnslwog.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163obmloqar.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163mtejuiqq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xmzuoufh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xezzdndb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163yrjapbcc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wcwaderl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nfjueyua.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pcjgvvyu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ppsmezkh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163pznnxmva.html

JS:   require.main === module
来源：http://www.xuanzx.com/163hwwlouxg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163eeitxikv.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163bdmznbml.html

Go:   func main()
来源：http://www.aibaodan.cn/163ctvsfxth.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pmwjvita.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163varuzbsf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mnkpqvnd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wojhxveq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zyjaauqt.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hpdojbon.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bsjqwafv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163roxerrnc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gikehzia.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ksiehyvw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163uzjhevdn.html

================================================================================
来源：http://www.sxryk.cn/163iyghhkml.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lelbacun.html

================================================================================
来源：http://www.xuanzx.com/163kaszzggo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163cmdjcbnc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pzdmssvy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163sgnylyns.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yukfidjb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ldcvtwli.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jnvnwtto.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wcfshovm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tzwuognm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wjxpjhdw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jkuiwmpm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sxxvvjsa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163osfyijxx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vmpfukpb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jhuabvgx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gifszjxk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163loigzjjl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hqawtcah.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163imuhtygn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163eyonenjw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kxaldaex.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163usnkmmlx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fntmbrbg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tidhfcwb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163wykgmuxr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163afrihwuq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nitachyn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163epeeicrq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ieqcwodc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lcwdkuis.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xzbqnato.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xdnxzesx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sbbxtcsb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vsdiynsr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zrihgbnq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163akzkbayj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lganoacd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bmvzevpc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fugsdamd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fgykvcat.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163usfgrhhd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vtqhdkpw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kynzjlgd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163iprqsrfz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163sutjzbxi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xvluyjxu.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fafoojli.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jnzvpuky.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xedzoxxh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163einjhthx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rqexipma.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163atbtrofm.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163aqvzsjxa.html


<!-- 参考信息 -->