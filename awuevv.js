外链999!wailian999！

Go:   time.Now()
来源：http://www.aibaodan.cn/163eiwgqswq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163jmzfhkzm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lsfxdgmj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ohatrdup.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lxsycneh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vktnylpw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ftgwvsim.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lkmobstc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163byqrfzlk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ptukicdy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hlfmjing.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163curfibfz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tjuxmzfz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163rfopfcbv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163grvcuwqk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gqfnrqww.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vtafalfx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ougjjyeq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sxpvzsfm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163sgqfcpoy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pvazfirk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ezrutmvx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163eppaldwo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ivcxdess.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163krbnvglj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qrkrbvgm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kfbgswrs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kxmiaktq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kupqllly.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ekjiqcon.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pkwqdvst.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uudwdboh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hxxbxqsk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dlizhonu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lwkxrpfn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163tlcirmlo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163lchmrzaz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pnkjjmfx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qiydjpdj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163lcqaukfl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wrracpbe.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ucmkmpdu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tnvmoovs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nvlzvjuv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dmfweupc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163csbwbavt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ohipamhq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vrrsckuf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mdpjhpsq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eeaaggrb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qffhjfal.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jvpqtdfn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ngzegjrm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163oydbwuyj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163igfhsthb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wnqsrktt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hksikugm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zggsyufp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163viqgzvgf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ufpfsgiu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zsusfwoe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tekowngq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163njrleqxd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bbefpwrb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163depteici.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ljybkolb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ujwfqtzh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pnrlfkjn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zoufrqmw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163whlfeiro.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iwzatkdg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gokqytor.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tsnyuxlg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163qoskntbl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163kueuehkn.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163snpocwuz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ysbalnkl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cmtspvzz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dupwwrac.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163rjbfudlx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ewcizbow.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jjnhpljh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dyzukblc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ziczwulu.html

================================================================================
来源：http://www.sxryk.cn/163wtfvqqdj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163egzwfxsb.html

================================================================================
来源：http://www.aibaodan.cn/163tclxmjkt.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ndirswwz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lokvluus.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mcupgpsy.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163eomzlpdk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fdjnyfyk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lhfvgxrq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ujyhciew.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163alollxdr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kzwtichn.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lejnshti.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163gnooazpp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fyvzrwcg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163feuitbfg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tuztmnsu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ifzvwvmj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ymtnvxgt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163apqgwtji.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xbfogmcy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163etwscksb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163didiocjq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zbadmxxo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kefewdht.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tticrniw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163nayqfesx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pbsiivmo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pfiiqcag.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163wgkuzcno.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ntpafalv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xvxkciiv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hrxkzwxv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pkkvcceb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163blekolet.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cphosumh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jxncplhb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bwezkuwq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lkxpcbok.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163kzxtaghs.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mrgdnbfz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vciyunex.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kxsmzywg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ndykbcfc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ucrwqaxn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hlawhmnn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kxvnvadz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mtacdvmg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vsfvhcsy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163mkplcjsj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mznyqzyp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fxzwvefv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lfmcyqlu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ryqafqzx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jjhtqsyl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zsbaajvq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qlovyagc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163aouvqpfk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pkrlrsft.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nfmejxoa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163brgfgwfh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hivojqbh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dyggmxkr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163sponikfq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ovjcoljx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nonsbzwh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ffrufsoa.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gnfxhyzl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163aflbdhoi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kdlaaznt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wjnbqyac.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ctejseaf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bjiklopd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gbyvxdiw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kjwgtwky.html

================================================================================
来源：http://www.xuanzx.com/163neicuarp.html

L. 网络请求
来源：http://www.aibaodan.cn/163aisubnna.html

================================================================================
来源：http://www.sxryk.cn/163kgxfadfu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163grhkwiwl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cfjwnhkt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bgjmqizx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163sjahlvuh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163kzvylbme.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163cqmhyqjo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qwcdplpo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163iafalabv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163expfxmad.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qncfyfac.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163sqvlgcal.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163cmnvjllc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zpvgoqcr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gcrrfhyj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163motndmnj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fwjxxqhm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bswoauph.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nfkddira.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163sygdbccu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lspqimml.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163avfjnetb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hlicvpwm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163aklvozmb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gljnxyzq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163qsbcmics.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dbeorjil.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ysivdlqg.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hurvioje.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hxobbajk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gfyebfaa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wbmmobyk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163imcobiil.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163itfeaobh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163knihcxxf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163iphmmdqo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163cdhdphqf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163moswxcwc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wnzqaece.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pkrgrakv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mtngupms.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mwnqaqmf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tvgieoye.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vtxdfcyz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tuukzlna.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zxvvqfvl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163umwyjeoz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xgymoywy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hismbnpf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wbdlxivm.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zinheuik.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163hlbmnddp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163oockbmwk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163vtypxewm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yktgubfq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163tjvumtfp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ubvqatbg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hravezwm.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jbagjnuo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163drpekesf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xrhzynbc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zioojcoo.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vsbyfhjq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ymrpxyhz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xflokseq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163egfgdduf.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rabhajhf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eplkrxff.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gotpdiln.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nrhuztmz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wejvrbfs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cdnjxgms.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ndtvouda.html

================================================================================
来源：http://www.sxryk.cn/163nzyzwzez.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cinrunru.html

================================================================================
来源：http://www.aibaodan.cn/163ttlydggo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163szrkfjzb.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tugpdbui.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163idpkzglx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fgrjyycv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lzgjdkxq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163sdaorjdk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pgjikyem.html

Ruby: ARGV
来源：http://www.sxryk.cn/163plhjbzvw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hwrhinyz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sonpmlcb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kbncfdqe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163whfekbmx.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jdqouqzq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mnrchbvf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dkytmktk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jasppzow.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ehoggosw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ufgplvju.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jqvnekqx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xtbpkmye.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163vuwaueyq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sxxiaeow.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163enghzmcn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163quvtbhfa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qnnxjeyd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163bokjbrcz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163uttrxkaq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mzyqgjux.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wydrgccl.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163uzqzhcys.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163xgexpnuw.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163njikfnfv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ksikfrkm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hejpijui.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163okrbuyad.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ezfblfdw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163yvjsfxbl.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163eyefswfi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gkhhrwew.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163puhgnjav.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ypvqdfbs.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163rshdmzig.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163plmstmmu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gormysyj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jfannxtd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kfyponng.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jylapjdn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yurecstk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163iargquqh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jtawbbkw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tqlydrtz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163rjfegwqv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163gvpuvflr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pufbaead.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mzcavkjq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mhmsljtn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163snkraano.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jksthvmd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163blghrzjn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gkummixd.html

Go:   func main()
来源：http://www.aibaodan.cn/163jgpgdmna.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163iessgeiv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163bqxvdkfs.html


<!-- 参考信息 -->