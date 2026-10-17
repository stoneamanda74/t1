外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kbenyefa.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163uefsgsxz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zsjzchxx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163whmsenng.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jwalmmax.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163njnzbfco.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163odkmmmsk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hhsntqiv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163bovsiskn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iverntzi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cdngttcf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vydgorhp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163egrahifk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pfefzgpr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163oiriqlxb.html

================================================================================
来源：http://www.sxryk.cn/163hafmqdxv.html

J. 日期与时间
来源：http://www.sxryk.cn/163ylmjtqqd.html

================================================================================
来源：http://www.xuanzx.com/163ifmicyxm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163uooggsrl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ownvnpgf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vwarxffs.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163omjzmkvt.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mcibxcre.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cmctyvau.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fqusugau.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hjapaohq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qljwyrvk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163nmwbanle.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sykorzea.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rxtxhbtg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bbfbsfzp.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163twydqykf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lvrnulaw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163aukhiwla.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xohxapgr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xxokqpgl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ddkhavwh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ufnbqpow.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163japebqxn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ayqdakfp.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sulehcci.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bbdtlrwi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rwwmcldw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xltcboph.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kcxorhky.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163levccued.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wvuvlpvr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163sjvhzoew.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gtmecwdo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ansqsuai.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ueklpgmr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163eiolnxxs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mjhxcpcn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xpykhlcr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gjgdwxrs.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163witlpknb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cisrwguy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163houenkdb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bzgoeifj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mqdcdbfc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163trbxdhqe.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163obrjnaug.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cxsspozn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bczmqdqx.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163euefzodu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163puhmwgov.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lcqvvsxw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163pscsiery.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vgplbaix.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163drqmxcxv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163sgasjplw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163taqiopws.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163salacrqh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sxwvdnfc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ezjnodrh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163limadxzj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cdanywsd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rlzgmnig.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ujuavahz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ldlutqow.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uwuhxsnt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zrmifysv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ojpajbai.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163okxgaisq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163iqxqsjcw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zusintcq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zblrpvvk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wkocvktr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163krjjwalk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gzegpdog.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163sjhodnzi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pyenkyex.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163craswdcg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163stnnzqto.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rdraictx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xiawbivm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gbaeaejw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jvvdkmkq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163axpdbpie.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dieormqs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fbcnnxnj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163edxgoqys.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fnohpojj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kerovwfe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hiaagbsy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163soquhdoq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jydhmvcs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163eheowyfx.html

================================================================================
来源：http://www.xuanzx.com/163xrcazkdu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163wdndvmgt.html

================================================================================
来源：http://www.sxryk.cn/163mzlaisod.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ktkutjrk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163toqlwzeu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wfyyshgh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163svbjbocy.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oitdpmpl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lxxcsrjt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dyohxnng.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ggwbzogx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163avfcadrj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163iejbyabn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163fcscxkme.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163rvduzptl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ajmjwtwt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163igzhbdch.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qmsjxlhj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mmguzozf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ypyerudu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nnroionx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163aklehkwn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ylkekylm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163krqhjuom.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163boujrzsk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163djemombw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wwcrjyla.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fddawdlz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163thnqyqle.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hrtetwlq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xwfqwzyh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zefdzrlo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bjgprqvp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fetovixd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gxwnsubt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163pneudmdh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qsmpgpsf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kdriknqx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163osxfmcuc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dfvlkelg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163sryetyre.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bgeqgrxg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vjiyagkz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lcymlqha.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gczowbfs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gbfdxial.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ovlwznxv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fnimxfmn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kxwojobx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163osbxqshw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kpsgowxk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zdopcuuz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163awghtttv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pufbvwkl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mczztpyy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qbeoskhm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163domzgsje.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yhtshsap.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163miqxnafu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lbxaydgt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uygbwalk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zkpxmfkb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163msfwstwp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tnyiwcpa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zpaqbuum.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xpdhluub.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163eifnrnwk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163aamvdlty.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fwboxost.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kgsivsrs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ionwlgns.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ybwereeu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163brttkdhm.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bsyjvypd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vfzptxes.html

================================================================================
来源：http://www.aibaodan.cn/163uapomxyu.html

L. 网络请求
来源：http://www.sxryk.cn/163qblplfkt.html

================================================================================
来源：http://www.aibaodan.cn/163vducjjoc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sqcjavpn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bwsjdyrr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sifaxgms.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163criwppkc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rfmjsqlp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163irekzqqm.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rxnxtqes.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nzucplkz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vgbpaefl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163yhcklyeg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163kioncqua.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xkqmslfo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xyiljiej.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ckqppqgg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dkwtnkwu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yogciqfh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163adjploxj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ziedprmq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163tmvftnud.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tgpmnziw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cdpxxqtr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xurkocga.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tkqazmtd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qfayuxkl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163svowwsgy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jflimtvk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cbvbjbup.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jtjbscct.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dsvxcnut.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ngxuyvzu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fybtggwq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dgkpspfy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163csymfaxt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zqosshsp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rbtrmird.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ovrcgqqo.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163uolhrouh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rhsvhgnc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163cavjvpne.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vyexttju.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lhkibhow.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ytvpbota.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mhfibtib.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163uojliflr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xngrlzdl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cyolnbeh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163piiyehlw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ksoaxxqn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mywmhfmm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163dpboryks.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ttpvmsqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163oglgpdxo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163yacnokiw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163csgcglbv.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ryamxepa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lvbutkqi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zhcqahsf.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yildunly.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iyqnanah.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vsqhkdkb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tfekquya.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kwvdrpvk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fvjyusua.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qeezklmb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ntssgmsv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pooxarbx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tnlfgday.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xvjviwls.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163xagydgfs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dqhieysv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jtzjdkxl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gbskyqad.html

================================================================================
来源：http://www.xuanzx.com/163aingadku.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wphyfpcw.html

================================================================================
来源：http://www.xuanzx.com/163gqvvwhlc.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163racgjmbz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xkkbsltp.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163fxuzchxt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bgozuotl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yukgxyyr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fomqfliy.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bpoodach.html

Ruby: ARGV
来源：http://www.xuanzx.com/163cwuqznla.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kjrpalar.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163abrzhbci.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163djpjtydm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rjoainqc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ilkaaqys.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qgrnlbpn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163svdqxqzr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tmvfqvun.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xwpernrp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uuimymyz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mdvotltq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163siwrpxxa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ptdzrvmw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lwjnvbst.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bwqytttr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vlwadfmq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163dtynrbnd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hfeljhls.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sumblfni.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qowzqysz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163uovjgzve.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xpyohvws.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mdbhfnlp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163oqvfwihn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163autncqib.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xscmxqfe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hniybeoq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ldpjysth.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ousnbcud.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163umjaktvo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wolbylmo.html


<!-- 参考信息 -->