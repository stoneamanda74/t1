外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rpfkidjh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rtnhtmvs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vfbztlcl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ygipsijt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wnjimkdv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163eyqtarvs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ugjckpxu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163negkxlqb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wdplihkg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163oywqexlx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ujmgcpde.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qyspxzyq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mqwgxvsk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qkretbrn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ptkvaotv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163aaddhxyy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ojsucbfe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zdcrusik.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163oihntycn.html

================================================================================
来源：http://www.aibaodan.cn/163njdtgqye.html

J. 日期与时间
来源：http://www.sxryk.cn/163uzrwqtsn.html

================================================================================
来源：http://www.sxryk.cn/163atzaynpi.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dbavxonk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163njskyytf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zdydiqpw.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vlvqfwwq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wajqgcuv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xiyzqcde.html

Go:   time.Now()
来源：http://www.xuanzx.com/163htwpkkut.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hpwrtdhc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ekzjlaub.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vwxdxeks.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fhzvpgxs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163oqhpwhdm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tfhbjstp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vkwnosjm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jsofwgwq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hzyyspiv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uddnkdhr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163njtgqgqi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163phlpgcpr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163poagkegf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hkafjqqv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dcsneedx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qsjqdcgw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163atqluawv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dhojjjjx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vbrakboq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rdymnqvo.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163laanxjbh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163parmohyz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lvbhfhdg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wzkfgenp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rveapkxh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rdnaiwgk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xyozryby.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163llvdyhpx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163eptrkdxf.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163fzjyvaww.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rgtxpfzk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fbsvywha.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lmllarxx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qwixlwip.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dqdsdhur.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hngyeckw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163brybenyz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ahyafgpj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yujqodgx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163yckbbjsv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pdwppxkl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ozlpennn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ztpjcnir.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ieidnnai.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163khiuyfbm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ohupmlrj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163sbmysgwb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mqawaytr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lmybarge.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gqzdqtqg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uzaebusi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163brtwphgj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ccclucjp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vxzfogkm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dnjhzcyp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mmvlycgc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gbsskdvm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163bbieropi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jfdspjbc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163noagxnos.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163njvlztdv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163nalynyqk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163sqfaikeh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qjrrfyyv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wpxtaxjl.html

[J09] 时区处理
来源：http://www.xuanzx.com/163tlyvvxtl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163oppbdliz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163autrdvzz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fdivahwq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zsbiplos.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ifjworxr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bwvacxmt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iawdtgbe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yzwqtbrg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163uzrdpyuq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tdbonajy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tsthpzfv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qeirgvee.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tjimnnzb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163qaagvkcr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wkuwvklp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163houeumrx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rdcsrbpn.html

================================================================================
来源：http://www.xuanzx.com/163bgbelvgi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nfummnwa.html

================================================================================
来源：http://www.xuanzx.com/163jswyjple.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zdimbkam.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jmspugwa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163migxuqmb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nyyezqxb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tznbjrut.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gywbgkqu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163glsnapkv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dotnvsix.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ljoweoci.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pjwflazi.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163txlogkov.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yueqwjde.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163idprrmuu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hlwticrd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tgvwqzsx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163botlyjwl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163opkluddh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uqxhkgwz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kmujsyoi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gsvoqbkd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163inekeebd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ciruyakz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zsddgwii.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163kzxxwwfm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163unwyxhce.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163evgerfdl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hnyivzmr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sdboytue.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bqomwbut.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cufjfrav.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jyjzlvlk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kouqqlgo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163hugfghef.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163veyszymo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zghixqhw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163anlxrbfr.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xkhuklvw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sozclcdm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pwnggkrb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qfbrlldi.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hnjwsvqm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163htehajbn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vzwytgsw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ywiikhvd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ijkfpylb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wfizgmin.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qdzzqsds.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rdbpglpb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163slqbundd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163byjllsac.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163yyjsjulu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163demenczb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wqmirubp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zprfmsjv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163xfvjszrb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ihdardxm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ynoluclc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bnzkhkug.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bwcgaqiz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qywfjoyo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lnluixhf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ryolgfei.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gzdvbibf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xfclxsyx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163crbvfpns.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vwjglkcj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rddzgigx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kuxvtmoj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kqemnepw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ytyijglr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qudbdzcl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163llxhgian.html

================================================================================
来源：http://www.xuanzx.com/163bhqtglrt.html

L. 网络请求
来源：http://www.sxryk.cn/163urxdilsf.html

================================================================================
来源：http://www.aibaodan.cn/163iakjzbqc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163mlxoctkk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163dxobdfuc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dqtcmkkh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jxuztkji.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lbsjacbb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163uubaerbt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jpcedlsa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dkfrmnui.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jjxmdeyi.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zkgnhvwi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vgqaokju.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ecaqrhvr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pmkyznrp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163owxlhulv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163oeatloaw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163emngfsld.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163byxhqspr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163abbotynp.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163nuaoaefq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gbkpvixf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163esfatxjh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ynybokbw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oovjfdke.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qbyvyzeq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163qrsxubkk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hpneueif.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fgwzwkad.html

[L04] 设置超时
来源：http://www.sxryk.cn/163itlrpbeo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163almcxssj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fuatadhm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dgdlavhy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rwvfmbsd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163gqvbppkh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lrjutynx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vdccdaxw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zaghobjv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zftoejke.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hadkekzi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bxvocthf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fsmrcgyj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pcnznoyx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cgolxwzp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163tatircaw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wvriphwh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bauduqdp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163izwpwxhz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zesizbbd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yisibocd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163omjqmsaz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rbniinet.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163njgsdqyj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rhqvztcq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lipocfri.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dfjypxdo.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hnegcldo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163phywzphh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hkumzmhj.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xxbsulxo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dslfwtns.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ydnbnfbh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cjwzcrcm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ncloihnu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163eybttuwq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qfonknge.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rujcyqws.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jbfzktxn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fusdeujb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fyagdkec.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163keundtji.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hvppdbmx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dqgmvffe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qexyipur.html

================================================================================
来源：http://www.aibaodan.cn/163zxeevqyy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fmfnzlrf.html

================================================================================
来源：http://www.xuanzx.com/163pefgwiib.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163smthiaju.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lsdosrlv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163nnfmzxot.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kynzfzmt.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mzytnmnq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fniznfbj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dslxnooo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163rtmvhbsq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fjfwreib.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163iwmbkvvr.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mwsurxzj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ueactilz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163agloxpns.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163abpocdld.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ilcrguyq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hkjudslb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163krmccsai.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wgrhwmmc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uznwhvbm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163bcjsbtqd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pejweosx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hqpeblkc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dxlwnmvt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ozrnnzyi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ygufggpx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tkappeci.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vitdgcwt.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mfpqtmfp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ihybcqug.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163etiiqtez.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qlrubtlp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163erizzdqx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rclrngku.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kfecurcx.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rzitcmoa.html


<!-- 参考信息 -->