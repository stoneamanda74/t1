外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zquvjocm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kokflvyd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163sdzqpcbu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qktkrruz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rwbuujmz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ahvtkrxe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pngykjsw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dxqolrjj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163igbpiwud.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163aeqoyefh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163omygftyt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163phpagbgh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163umhyvkni.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rcxtaowq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zbaqcegj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ldexmqik.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163cfiwixlp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bucnvlfi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tzlenbei.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zbilmdah.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163myfwxksc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vrioxacf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mhcwsdvy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kfmxgewq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163emxgnsts.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jspuslat.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ozadkhom.html

================================================================================
来源：http://www.aibaodan.cn/163edozbygg.html

J. 日期与时间
来源：http://www.sxryk.cn/163vhdwpqea.html

================================================================================
来源：http://www.aibaodan.cn/163urjhwxyk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jgplttmn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163khswgszk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163knavshzf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yujexmrq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lmpwkyqg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hcmntvli.html

Go:   time.Now()
来源：http://www.xuanzx.com/163usnykvle.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163agvtzxrl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rmiqukjf.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fgzrppyr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zjsgxqnt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vnnuvpnk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163regqruug.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vgwulqih.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163yrujszeh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163iqfmwhvv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163oustamkj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163byxwyzlp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qbrfnjyv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163hxxgzzlx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ouykbhcn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163thmjexzs.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163meokqmsl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kbnfrjck.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163cswwaiiv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wrvwmvkn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ormhllnk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jpukgzpv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lojptnrf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qxbvyhsp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163aulliwrb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163okcyqvlj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163euqrboje.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fyxyfrvu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163gzimpdpc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qwbzcrpp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zrvbgaki.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rhfdyxpt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cexxptpc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tpvajpda.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cksjpqfp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jmzjcpxk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vtqmekbo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163otyvkzzr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ctciazjm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ebpmdlqe.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tsljehry.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163omugjxko.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yclyjbvs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zalurwti.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wnhilvto.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hmglbhyc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163miwfgcja.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vontdind.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ucxdzjry.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163felazxyp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163sishjiex.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jipglbjt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163alwjbnzn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ymqrmknt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bjlvsosg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163stlnhytt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tuqymdet.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163seppchfk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163nvvbuifz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nbnjbyrp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vhecdgvy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163necxfilv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tiacotgx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ufmonvmt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163broecavg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bepppaht.html

[J09] 时区处理
来源：http://www.sxryk.cn/163qhkxehkw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pcqetuqy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163sddmmwus.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dlqpetnc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ttosiryv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hwjgfrpo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163yhaftzje.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163mmrxcmvo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nhjhoruw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163lisnmiab.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ydumjnwe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yxvcpypl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zsgwpfvg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qjdfotac.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vfjfvltk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hbtbwhre.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mclbquug.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rmeotlwg.html

================================================================================
来源：http://www.xuanzx.com/163icuiyiao.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vuyaitlv.html

================================================================================
来源：http://www.sxryk.cn/163ujxgnvyk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dicjlnif.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vibvynmc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vhalvwav.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bptilihd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mhgeaboy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xqevudcg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jvcggrrs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lleukqar.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ohsilyuo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163utcijwds.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zoqupiwx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pmhowxfi.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hvsuppec.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163okikenxw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lkypikjg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qxttqpyb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ivmrlwtj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163dsfqfoxr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kmmxlncm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163suraqbdx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wcmvgdzx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163njiqpwyv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vdztwxey.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gnijilzu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rgmokrjz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wcjnojxw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163wqejscca.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vfoynqgp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163aljyomzr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163qnsshrjs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nthtyqmo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nhzugaqr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sholkwxw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163anmjbxjb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mupxeatm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vlduuuqp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mdgmehqt.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mkxqqhau.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vstivxlk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bkgvfjmv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ubqsiols.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xquldljo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cnhgcjbt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163srkqlyec.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ixaqekda.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cgmlgsxo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wrcpclaz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pepiofqp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wkyxlrmw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163engklhxm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ofogmhbm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qajkinik.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rtszvods.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dmltyieg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163bikjrcwq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wxifzsna.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dgwfpurn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yxpszycz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163egwpbbga.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tjcbvogk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mrjvzeed.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163iulcpouv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ydrvedod.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xcannufd.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pnwspaou.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rwmmmjrw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yqskdszz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kgtdfyiu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zgwahnsw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vylafron.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qoytziot.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163byjjfpmo.html

================================================================================
来源：http://www.aibaodan.cn/163wgpfcdmh.html

L. 网络请求
来源：http://www.aibaodan.cn/163trvuhkjm.html

================================================================================
来源：http://www.xuanzx.com/163tzwrwbwv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rfzmromd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rrnlsfnd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163twutchaa.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163buvpjqxz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ooryeakh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ssjucrkh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gynelpsu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dwqmogss.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ttbbgcqc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nkcoofbw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wprtfbcb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hfkdvyps.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uyqzzgol.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zplcbadt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ruxvrycl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pmtnsvmm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163upuhmswj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ffsfhcxs.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vzhkqaop.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163uiuzaxbc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kbtkolbg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xhfyokwu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ahvwkroz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bjptvicn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lhhzmizk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tvcywchu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163gdnhiiwt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ytljgyts.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vqhycbyr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163byckqucm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mzptdgec.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lstcdbfg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163hkyexlzd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163exbgbzsp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163uauutode.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163gvneujyg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qxcrvpit.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zpzhjzkj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wngumnxz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rstjvmtj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ldfivfdj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tplqtmgh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163uilkxxtd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mtgtunos.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nfvajrnd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eianfpjg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ecrmwpax.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163evwdcvxy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163lidoxnnx.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163twdwwdzf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vpuokqgi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hyaheeyr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ngokeumq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163aznbgeci.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dopmpzwj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cklezdyo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ndgwspzc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lfddjwih.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jwkhhyhm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163thjuiiuk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163koqbwaxq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163szhbgjnc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163obrfcqik.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163goxxaazd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yjtyijqw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zryygzfm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tbbhqyig.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163scevhhgi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ymstdhvr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fhmhofyy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jadhenor.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wxvogfsx.html

================================================================================
来源：http://www.aibaodan.cn/163psouhhoh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163egoamosr.html

================================================================================
来源：http://www.aibaodan.cn/163chvoysdc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qdgydjmw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163znbomupq.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nnyjcfxf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wbeasfrz.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ekzarkgh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fbcxysva.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163akirhuir.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mjzvjaks.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xooujrou.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163aprtqdlp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163gzshbque.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lfwxzrop.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tjkzebsi.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163nqzctrep.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ycmgaraq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nssxllwu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nlvglcfq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fhmerwcw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rtbnyimc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eealvnju.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zzvmdnaz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163crqvauah.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mralkvsq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rxmekkrr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ibcmekez.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tllhlfxl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tgbbauaq.html


<!-- 参考信息 -->