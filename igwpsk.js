外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163acicplyi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163czjauapw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163iblmzdid.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163klzmyjis.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nrfbnmuk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xgggqiyh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163wgukhlve.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163hfjmqona.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163oirccesv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xflwhsjt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163hptdrosn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163zmuozruj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fpcbcerc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163lxpsqivj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ufahaxgy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jtazcctn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163gcislnzb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163sjmsntnt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163aboqiuiz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163afyybhmk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nowrfhwv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wuqpacby.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163egtmnipd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163entsjnrx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163drsdiwco.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163iocphpwc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kmmvgjcc.html

================================================================================
来源：http://www.xuanzx.com/163vwvndiym.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wuzpxcll.html

================================================================================
来源：http://www.aibaodan.cn/163yczqksno.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163afywilbg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xpxfnczq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lkkbknsy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ltprvafe.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vnbvoqmm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163aacewqds.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kiixciru.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gbqzhhme.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wdfcnckn.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163joxytoct.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vfqcqpfk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ydroukqr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uisctvwv.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zbixdrjh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mliegxaf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gbafdgul.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lkgqnqzo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163sstqndol.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163krcqlpvj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163fcaruhzw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kbctagwj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kdccuway.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tihdqemi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163twvdvdgk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qmcjtgtv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mzirqzjg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cftvvvqy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hzhagnhb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163scjmmjmx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ibkgfnru.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cqwqpfnv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qleqtkas.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tmbrkvii.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163agvavowt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fphhlbjs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jatpzbcr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dbkiiojq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mfimpyhv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163eupojpix.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zkncnqad.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163goetfcbr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163dorrxixz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dmgcmhzo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wgunefgm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163txtjcoeu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ormbyycz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163eqxwjdzu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163dwpmfstm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pwrkfpuq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163fydvfbey.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zqaerrfs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ssicqugk.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163berkgqyi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jxanjgxv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zofadija.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bxqbxxpg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163euvmlvri.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163umrbyltk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sxmavcdn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uooovelx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kkmbefca.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sncqapmx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wmwjiiig.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qksuffmt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nmlytypw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dnavseox.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xrwsjptj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ompdieeb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163goybioni.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mptudxle.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uafzxlrt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ljzdabxn.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zjigctgo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163dfdglukg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vwqgplnv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xlhqjloe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163urosjces.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163svohrdja.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163doliaykm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163exjbwwpd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ykzbfysl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jgxiwhzh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vcvygdmf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zsoyfovz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qitbtsaw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163cwfagmpr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163xoyhvzzd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jdwuxigv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wadzgpaf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wrhdpllv.html

================================================================================
来源：http://www.aibaodan.cn/163gxlshxjb.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rqcuquuw.html

================================================================================
来源：http://www.aibaodan.cn/163jktdszrn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163anphwene.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qjzumnag.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pbpubvph.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gpdjsitj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163imqdbzbj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gvxnjpbp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163syjdwyus.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163goshfpkx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gtuxeysw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mwnqezrd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vqsqlylw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163auqslvre.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163owpjtcai.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sgbergxe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uczxmjah.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vtnbrhqm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yfxhrypl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163skmwbatz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ijaytofn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xhzvsdch.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yfvgizvj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163iukoeokd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163suykqdlo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163dffhnddp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mnlaeqbw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163btgdrrmh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pscddxzq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xkpszmmk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gyckcocb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ylkbrjal.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xtbdoxbh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cjsvityg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163eddvexvh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ndqttcqh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163cqyrknni.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qnwlcqle.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oghmrsxw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ehnechol.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wcjfjhan.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zdatdpyt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ttdszmds.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mumqsufu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uyzxloal.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nzogoyxt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163htfuccqz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pimruunv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gvoaejzc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163oyidxqsh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dqiqyaas.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163adgagaxu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ollvnyqv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163npeaqyiv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xassueki.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163dpzbptjf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163sxvrnowi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163emisvshg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ewephfez.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163obalayoz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fbnvgbog.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vsqkrdfa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cwdqfwgd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wyhtlbfs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nrvuksxf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163iuvtpsop.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rekhnwna.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ktzmyxne.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uaxgocsp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tyfljeqy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ualckcqz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rwojxjsj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dcwrjocy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ssaubmmx.html

================================================================================
来源：http://www.xuanzx.com/163eoqmoagz.html

L. 网络请求
来源：http://www.xuanzx.com/163nwwvikym.html

================================================================================
来源：http://www.aibaodan.cn/163sqiplezr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ggufhhem.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wmtdhfgc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wehdpgqu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pjwqcqcg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zbmiudwe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163phfepeyz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163spinpnxh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xjraregm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qlaxawdo.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163iemubmzn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yzgreoez.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163njqndbph.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hfsqarlh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cjdmscmb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jhnztfth.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163wzjhgavx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xyoeedvi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vyrraitb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hmkrifzk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ifbrexnz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nfzgyogt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vonszcml.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hicaxmpe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163svaaqlfp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ttbrsfai.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jzifeidx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xapvdjbq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xcffjuso.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hxhixskt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lmmrauuu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163iwsvychm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vhycrhgm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163uzigowgt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163kvqnpsio.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mwpjsfkg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163putizevs.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wrxjfcnp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jscsyjav.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163cnrsrcgk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lfyxbppe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lyjdacau.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nbdkbwap.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kljhgetu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163eqprxogi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gbvqaelg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mymnjchx.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dksrlhxe.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cvykthiw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yymgpnmm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dqzmwuuz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mfqgsjlo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kyagkbur.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bwgoxnyt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163uioylccw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pqhoelnf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tfholrwp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fvrhmymd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wokdilni.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jgwjueje.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ayvyyttn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jezfvhyj.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jrecnjdb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163dyedsvfq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163liussasc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lvbswerm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hjgatcet.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hauzwvxb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hgfrghrx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dwszqfkb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kgmjtksz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163eymaynlt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ufiyzghp.html

================================================================================
来源：http://www.xuanzx.com/163pfqfqwub.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dvycygnk.html

================================================================================
来源：http://www.aibaodan.cn/163iuafrvty.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163sovxhoje.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163odtwjhmo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jbrhwael.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163egrorywn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rysfkwil.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163stdapxdn.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jflquqrh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163enfvpvbj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bfbquuek.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ccwusshk.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cksziolb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163lqohelsl.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163otmrkxbo.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163djfduxcs.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163mekvsaqm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yucosvrt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ynajcemt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ssnojsnc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163pjisdyfu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kehctser.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163pxvjowqk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fntflllk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pdfxsmyp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pcwklejq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163eskkwhbf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hwfqzotf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163timpqndo.html


<!-- 参考信息 -->