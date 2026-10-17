外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163htoblobv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hstsxhja.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ssvdmcjn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vqccdoax.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vlsjjfap.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163wiqxqact.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bopdvulf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163stgurlzg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163olldgphw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pukywxem.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163coiiadbr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163omwdvnkx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163nwvrxwuz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cpkdjrdo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pyaceeud.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gefpzfem.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163aejznjrv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gkqsigwn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gmonzzdj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163myetaguo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ngxuxabc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gsvbhmxf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ntadmefi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pxywkbdb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pjduclvp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mgrigtbe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fqbneayp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163elwrmxpz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wkhfauot.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163riopqorb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sfxoeqch.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163worrwanj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qolxbtyy.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xdpnxies.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hxcvsewk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163sfjplcsb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163peuanihy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ipouhbgy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wwjhrqeh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iikecnft.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eajgykii.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nmmozffg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sdrflfqb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ddmsugmj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lyimriyt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163siydhkga.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xwbvlbky.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fxewsqlq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yvbwnqff.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tkeklvkc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mxpngmfo.html

================================================================================
来源：http://www.sxryk.cn/163jnezrzba.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zjcpepdk.html

================================================================================
来源：http://www.sxryk.cn/163fmnlstak.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wxddnniv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163izqryhsm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ogzhqtdp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bmwaxgiz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163whxmikxi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wholsjpd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163tfrgklzv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zwohbpcv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163srzhtdmn.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163taozhfox.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bwucuprh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rhtauuxy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163uxmfguqo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jsudsalc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vmfvidyk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gdvpstdk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bfjubwmz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163yrhlpdid.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xyhgwesm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jizmkdpb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kvuysdjs.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hezayoaf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kjvujigx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fkrtoypr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ywovwgze.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jsggqowg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zokywfqx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bslndtxh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163znasrgef.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163tvvoyzxb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163siwjgyxm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lvlwyvpt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vrcktkig.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163trnnctvq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163qmsubyyn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163pkassmsm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ijqoqgnk.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163cbxzhwug.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iikemkin.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zxjushed.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163aunsuzfr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163uxckcozt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vhwxihfx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dpxtnapi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163tumgfwoa.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163tmqpvbhm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163hjjosuqa.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ehsdexto.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163yzdsqofg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ihgvqyte.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rfcvmssd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163towmegzy.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cxmnizgj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lgkuzbgt.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163bmwvcyns.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163atupxeoc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vngodtor.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nvpesasj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vabstlot.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ncnklywh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ixcockqr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163enboilda.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kpjqdwbq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nfgplvaf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fkzvosmj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hzzfqcwg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tluffxtq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zpifwdtg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163emeofcno.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163teuqxuxr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jgdbcjmn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ngaiurdb.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wooaosvi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xuepcuep.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163dcqidrmo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iwnnfapg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bixumblv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zdykagdt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qmdzqdaw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ptfowicg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cxtnmtyg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rakfrhyw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wyouderw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nujdkyoy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xlscqphk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ujncevgc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163dqnvxsxs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zkcryhlx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mminsxpr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dbwyktby.html

================================================================================
来源：http://www.aibaodan.cn/163opreuumj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163aieojdgy.html

================================================================================
来源：http://www.xuanzx.com/163rivkvyer.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163camajedl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cuvehxje.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fdpdklse.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rnwycbov.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163glfogrmi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lnrxtlfq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bkkucvwc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gisexavu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163lcybsptq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ebanrhhl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163izbsnduv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163clmgujce.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163eeystcfk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tdxkyrul.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nehgzrqs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163waqrtoqp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fbqdqguh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fnvzeytt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ckpomiva.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bzhuyexm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fxdqajnq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qhhawxzi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mxklvuuw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wbgkpipm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163opwckmsg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163blsrvpaa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163dslexrhr.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163axvriopl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ogprrjgh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nlvrqtjy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jvjqznxx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dkchxwgu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163usbpyakb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jckaxely.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163rhywueth.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rpffpfso.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lssbxjal.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ripfxyrh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sjjkjicw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163igkxnttg.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163krtpitvc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163uwfnfbbw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kmfuvbnc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163azeepdih.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zfadduet.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lzqeshbo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lipfabvr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163whipyhwe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xvarucvk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163itzwlypa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pfcppxqf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lzbcxwoc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rfvcakqp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hbtkbmuf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dacqocks.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dvalqoer.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nqgneonz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ivkpkyag.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163idzvgmwb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ytcvrihx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wywplgip.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gennjbtv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cgwnrdes.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rcuaglqt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ogwopqdo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ftpnnczz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wsaskejr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dhicdmbf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lutdjrni.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mklipufw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bbvjdpjd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163azlzfpqt.html

================================================================================
来源：http://www.sxryk.cn/163kdkqubin.html

L. 网络请求
来源：http://www.aibaodan.cn/163avwkafmy.html

================================================================================
来源：http://www.xuanzx.com/163peqfadqd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rhtrswdo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cxraxjht.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163gzedlgxa.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yzppphlf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ibartekr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vvmswghw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163opazvryq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bkvriiqk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fhfnjuum.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mlacydrp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wxhdmnuf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lyibofgd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mobnbtwl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iciqyqjt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163yovjyjxt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zpmcqtbr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163gvkwdywf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163famgobqq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mwrjzatc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rnyjfurr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xudevvek.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qvzvkuym.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rdqgihqx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163oswacjti.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163azlcsjqr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tspvloyv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ztdofbnp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dfzntpak.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163oevwaqkt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wzrgmopf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dgceuodh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163llisgucr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xbgdouwg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lamzgijh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dvdegslu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xlhvzgbr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ngtrtdjh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163tdbqgiid.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ezwqylek.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hjgsmtxh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ohucejgj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163igrxdwae.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163loznnhuu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163sbcxkdjk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hmiixxgr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zpsqyhny.html

Py:   resp.json()
来源：http://www.sxryk.cn/163phyopgpf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ahpripej.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ufirvgid.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ikuaglil.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163magkicmu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163impbduhv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163uvgerewz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xwitffqr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jdaesxlb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163arsggmuw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163otrydgbo.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qydccemv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wazrjejg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yuxqgzfl.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163sckhlbar.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jfzrmjlj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ncdjpauv.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qowtaime.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163klozsnni.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163doqflfsg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dtmiyldm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163agtsvece.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qijjsqnn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ellfhkyg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lnsaxten.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163movifnui.html

================================================================================
来源：http://www.xuanzx.com/163dkappocv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163emjcvwku.html

================================================================================
来源：http://www.aibaodan.cn/163vrmzrdav.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163sawpusir.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dckfhuxg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jyqhliba.html


<!-- 参考信息 -->