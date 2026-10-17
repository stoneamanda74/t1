外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pwyevvpr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wbrrnnrl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163iiwgblpg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zfybwqxi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gusqxntw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163contlugs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ickybpfb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163siapolqb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hwootrju.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163nvgzsjhf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163nnvutfmz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zhqscvra.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zxufzavd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vmwhvwsv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jyqbchmu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vngdxdpm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ttwtrvfp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dxbzicwh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yxlvuins.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nrnibjst.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rlmtyedm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163akkzbsyz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163sqoacxit.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163eoxyalnt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xcebjjpq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163flantxds.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xnpjnajo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zbymqyza.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mhhypikw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pogwvblr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163evbfpcro.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sngrxlva.html

================================================================================
来源：http://www.xuanzx.com/163srfwwnmr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jyoaljjk.html

================================================================================
来源：http://www.xuanzx.com/163rrccgxig.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rfypfnhi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jvctriji.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ociynfvh.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wqbqtunn.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fcsfmyah.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dobelpde.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pwvnoycc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163oemvehlx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vhacemfu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163trwxwwwo.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fddabirx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qukytojy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163flirdcmf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ayzvbujh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163cdixdfbd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163plfcbyjf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163iqqgygzc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dyzstnpy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pwvncetc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eglhdqqw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jccokgls.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vfhudqqz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hdwqsnfz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163nosibcnh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wlhldxtd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dhomifeb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fbcdgtvr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163deywwkqz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gckigmuc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jpviodei.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jlwsjuvi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hjiaddfi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ndluhdkn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cvycymeb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yyvcislm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163yybaaabh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163klzywmpc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ltydhfrk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wocojips.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163orichife.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163neacgrsg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bzfpgjvz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pinrsamd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jbeoegnt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163kbozreef.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kgxtyryd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zvdgpdto.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163drtcsddd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gdorwhyp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jritzcpk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uitayzms.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163okappjsn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ngmihqms.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bhdawjmt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jiyhxett.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eihdmjhp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yzmbsuwq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ryshvphu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163djgzqhsx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qjrizgkx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rptdcakd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163cjettxgg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wldvleeo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wbimiyaz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bnmoofse.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vctghlem.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xwelbvdv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vscxqvzc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163wurxbifn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lacrlpye.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mcjjegpt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nvhlhzra.html

================================================================================
来源：http://www.xuanzx.com/163qqsvhfqx.html

L. 网络请求
来源：http://www.xuanzx.com/163xhdtxuez.html

================================================================================
来源：http://www.sxryk.cn/163srurbrpp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163adfahypd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163iboagbvx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qgnpujqf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163emtkhgvk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163cwoguqax.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pvsnfovl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gtyyjxul.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gwgljjvw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163drnvymix.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dgwujvtq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gllzwjxz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163veydcvcv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ogejnvbq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163anmhtsjc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163otenytgw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fpmuraxn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vaufphof.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163oprfmmnm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ihwxfjut.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ubwewwns.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163toikawfx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nhgdtzqj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163boyckzat.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bjfxzvov.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lheltcgb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ycwqfvky.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ijxarefx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fduwiesa.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jtjggpyq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163repjkice.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zvtxxexy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cjimvpfk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fqeciybb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163bhbvtrxm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wulkokhg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163uxrokjic.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fhjzrwks.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xhspsxni.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hplsfsik.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kbpodaoq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gapyefls.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163drnihlxl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wnafsvac.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ecjmzzda.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mnxehemz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vwkvivfg.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vsjwbaxk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ptyhtnju.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qjlznsiq.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163sgmfjjqt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163peetysiu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163uawimjua.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hpepcnts.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pfelqnro.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wtzcpscn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ejxdpbzi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163veeglvol.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eqdckixx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ihbjdakm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163blnzqajf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ytdmmwck.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fkwdknfw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ioatbvbm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zlqahrgg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lwnavizx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cdwapsmb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163odeutumj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rmxfxlgv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vmnyvuwi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163guejbvwt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kbhyqbwt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wcymmxrw.html

================================================================================
来源：http://www.xuanzx.com/163juojtsnu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163lgtlbpci.html

================================================================================
来源：http://www.xuanzx.com/163cgicwpog.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vhzxjkaz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fqqkepei.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163trbtjmbo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dekqwxsg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nwlbinmb.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163noemwapi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pnblvyge.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fghfmjpk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hmztjrcz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qfuewxry.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qesckucv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hoqdzysh.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dngrixtx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ntgfziwv.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mhujthie.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tqzvybcw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yzspmxzv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lqfxropf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mvzcbkta.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qvggbyqr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ymhwypcw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zeoyfcbj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163awgvjwdb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mdvkyorb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bavaftdw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rlebvjjf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qywlnvhl.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bgprkkes.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qxxcuxlk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xuslltdu.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zbpoayoz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163minzfdrm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gnxiwhrd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xqmhaibn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163enlhgtny.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wtwmzrsv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zcamrdnk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jjpgvyxy.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tizjhcwh.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163naiixkeq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163aotdnorg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bstuujii.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vduoqpjp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jdjevqnb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zqunccal.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xotuxboc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mxjfdixz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163erlikymx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lwyhjcgo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zsmjpcrg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dyewhksh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163igxnravt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163waojugvb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163igjqtszk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163qwaubyzm.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163pjumreqo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gqdaxxgb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gogtylgh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mdofivek.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zgaduczt.html

Go:   func main()
来源：http://www.sxryk.cn/163bhvtriro.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jolefwwx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wuskuyum.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fdscegzc.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163alkkjkvu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dzekunkj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163argphhdp.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163debztzrq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cauozsqd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163afvitkwg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jsqscniv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xzjyjbch.html

================================================================================
来源：http://www.sxryk.cn/163qejzbkvo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zrnpekuz.html

================================================================================
来源：http://www.sxryk.cn/163rdzpygkc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163phitvfff.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lhkyyfiw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ppdklmuj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rmzmivqz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lrhssxlu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dgyyyals.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ydvdqans.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163jsfisawu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lsrdhmvo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pfbaltav.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qsdovbgo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163swzyqazl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tkmkemry.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fuwgadnf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163legfwpxp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163vjkuzkuj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rhdhlhph.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mqlxfity.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163opdcbuim.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dvcugzoz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163raisnatk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163odtkaorp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tjnzzinn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yzkzupjs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163dxlkpvth.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bitjfbvh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rgahknts.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qgqhbjht.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jrgssbbf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jubeaedu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vvgxypbr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cqzzlonq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163morfutvb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zoikbaef.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163aozheezc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163eowjvpil.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163skiegkbv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163frogwkvj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hnldyoav.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163juujwhfr.html


<!-- 参考信息 -->