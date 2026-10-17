外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gmusuphr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kqdwddai.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163omrckfgy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163hxttxjjs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uczybvpo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yhapecsp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163modcbvnz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163othfdlfy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ohypqzpx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mccpgvva.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xydyorsb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163oailkbdr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ofjtgprt.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dcgmgpee.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163sgqrtogg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pjwczulz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163cwszkkjl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163whrhupyz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163azrpubam.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dcksqgxe.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qwqhimsn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163oygqpwhr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qwpjxxsz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ngfulazh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163gxcdycvy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hgytliqm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163svjsamsi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uaduadpb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rdisjqwm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nzsdguqm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163hfzrjazx.html

================================================================================
来源：http://www.sxryk.cn/163ingnmjxl.html

J. 日期与时间
来源：http://www.xuanzx.com/163hzfrlgfd.html

================================================================================
来源：http://www.xuanzx.com/163scwlqbcp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163niubxdcq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lstmhiam.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163nkpmrzpz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xxajrvzt.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ypxnfxyh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163npkvytxo.html

Go:   time.Now()
来源：http://www.sxryk.cn/163phrfcirh.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xvqconht.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jlrutrhy.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mdfuccub.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mhbxvcyh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tkzmsjep.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mgxxhdlu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163elpadwnf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163paquecpc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zxdsudwg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ibgstgqk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163raxwjcav.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163nlpzwysb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163iscdslal.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163uztdpjiy.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zcekqcrd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163krztxozr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tptatzvr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ynsmabwm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sotdggla.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163azmennnl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163uciblrgv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hxiddxqy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163arnmqsub.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163sfmzeeip.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gvsdyezr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fzelgdth.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163sdmgtkag.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163iizjmflm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gqkktcxu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uelwxcxu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lbrtskwu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163yfuejlmm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fvlufurd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cphpkrdk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zppgfdwp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wmtvrdnt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rmwloqdb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kmemmcpf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163evlstzar.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163coayxfzx.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163btjkwcjc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tolzsiye.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163sufhajwz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pfxwyixf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ebbepyqq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qrkfbsuy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tnkwwcfa.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hracwbhh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eiekazew.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ctwmwwrm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wivodcwc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mrnmqmmv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qhmlaxxv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xbwsmnxv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hftooyvl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gsgwbxjs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163tkdeakzt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kiqboata.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ovugwvme.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kfqumsxy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mdnkkmlm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ktegeudb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kvwnpjtb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mmavzwnu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bfesqbne.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rkcrrmxu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qgvotbvx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163yibrgluw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fjzubnej.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kquyghja.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ecibzqjo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cvzpbjzd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mptlnclc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qjayamyp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163gzmbslms.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xdqdurtu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bawhmvgg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ohdkjuit.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tfotbtks.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mhqmeqmn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ynftdblo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163oclawdti.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163yuocwqfq.html

================================================================================
来源：http://www.aibaodan.cn/163cqnfvjgw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rrlgcdlv.html

================================================================================
来源：http://www.xuanzx.com/163yfdmsbwo.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ldnpjape.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nfetqufe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ftpaapit.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jpblogae.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cgnmqayp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bvjrrski.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163iugrdonp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163djwdixci.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163urgpyovr.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jzvpdmvs.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dbvrnfdg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163uheoirbu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rxrbvuyd.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uyumqjhb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qwujlyhk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vubrddjq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tuwtonsu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cgbemuvi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163iuzexyxm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cuaaukix.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cabowhmy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163srrxldlt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rdyqrset.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kzqxfjko.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vmhinlev.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ayggcgvy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rxkgggna.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163crvozvtz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163puribwfw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163blbntbti.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bxkjnmcw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163enhjvrxy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163pvyczdvg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ecgqzdxj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hcadceyh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ijmtfaat.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jjsmcauu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pbulmtvu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163agqbsewo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vcypghyn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jymrffmz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bqqkwlya.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163phsokmas.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163aufmsbpw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ekpirupk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163renamveg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gjqvuipz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xoorlhca.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rohowyqo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eyojdvga.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yofdzaxn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kwadjzzf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wvaufumy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163wzdoebfl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zcbayunh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163yvwuudnk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163grdkggbc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ljahzwxl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163brozwumw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qqtxgiwk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163eclhkpbk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hmfvbowx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lqbaldyx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163lkrmnacg.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rcvatmqm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tadnaqfo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163faxdnxym.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cixiutzs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nsxgvdfz.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tfrumfxb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rqtmbrud.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163osbdinga.html

================================================================================
来源：http://www.aibaodan.cn/163xckrnjxr.html

L. 网络请求
来源：http://www.aibaodan.cn/163yumkalbu.html

================================================================================
来源：http://www.xuanzx.com/163sctsexyj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jhcwzbmq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163oahsnsmz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zggjsaqf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jzyfzqhf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bhmiydhh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gyjqaurq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163iijjqrwy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163biopvate.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fgnknojs.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163gzsssxxj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163orpackrv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163aodownpc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cnfjrhte.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wotldicq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bkqubrqr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gfawuwuq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163txzgxerh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lrjmcwob.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ztsanhyl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ajemriwb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kyujwdhe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uttqcgeh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163radrlekd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163exacwipy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ppkprnzm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yoyzbgar.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nhtwmqix.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163doxtnjjz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rfptjmfl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eonzqihd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mqazijos.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uoxufxgn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pvdwazpl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gvegfyuq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pbieypns.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uaaswjef.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163eztigvuk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163cfyfkunz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yjunmjjr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nhbkntim.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tpsjzrdd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163bxnwlmps.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qvcqaltz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163nifilrel.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yjxjaill.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qrhkmilf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zxuwgzxh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163dnowgzoe.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hcysjnov.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163jqcxypfe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gtvtxcqo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nspfncoh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163orqovvui.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zinunroc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163numgedtd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fsrptytn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163okpwkhfh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bqjiiqiz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fegfkloh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163niapuemm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zfywoppb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wxixtmph.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163okizaamj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ojqcbdbx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wxcfqokh.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163qjeuobho.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tftykpns.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163icqgmlmj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163pdnplfil.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163omtocbzc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163odltoyxk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ktliyfok.html

================================================================================
来源：http://www.xuanzx.com/163quwgxkia.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163oxnrjhjv.html

================================================================================
来源：http://www.aibaodan.cn/163jmclgyze.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163yfuciend.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vmskginj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cbiexvcu.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dpruosbs.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163adhvoley.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163popdsumc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163artpyjym.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hftnmhpd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fchgssey.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163fvhfwbxc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rrxyahlm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pupvjdxr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ohtytnsh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mykkrvdc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163myeadxxz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ktmmhqni.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163hwmyfdxx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ajwhoiei.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rhmlrdaw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eorwlbxz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nemaeena.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aanqttxn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yresvnnq.html


<!-- 参考信息 -->