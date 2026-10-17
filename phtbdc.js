外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163obkvmedk.html

I. 正则表达式
来源：http://www.sxryk.cn/163yaqrrkfd.html

================================================================================
来源：http://www.sxryk.cn/163ntndctqc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163pjiohvis.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wlmfbuez.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163fuxdrqym.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wrclhojv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163beqfwhws.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163iljpwvxi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163byimfksn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163kcrnkzvt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163openbbct.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fgdslozk.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mjrtkhij.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ecaeeblr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wcdpsuqj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163luvzvygf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vretvdpq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kpfogoed.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wpgftzvg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zpxjwdvw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163cdkgmchj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163otjprzes.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163bvnaiqhz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jwbdxdap.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ereflbzc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ejbbactr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nywqbsaf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fiyampuk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163brghnfkn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hgpdrboc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163pnrkvpuk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ovcpocur.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vzwvpggd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163orbrobtn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wghniywf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163nivagvdq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ptqtqcad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jjecqzfj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dkeicgyn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ppmbnjri.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fsdvwnzl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jocsocar.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jvgraljl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163izaojnnw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nljvlsjq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hibdaoym.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vmgcigtu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dlfaxjrs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163czqydmpj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ygcjdhty.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kpevxpoq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ovgynazy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rjhuktxh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xukxxcun.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163lkirykyy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zjjseayf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bmhcfbrx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163drutoxaj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vwdkwohm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163syolixzn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qcjdstfi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hpcsgivt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yqhctsty.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163royuksmd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163omazxmoz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163miooqoly.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ijzrhlqk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163eqxzfmnx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ztvznlhd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ppdzyghe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hahcgkgu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163eslbbwyi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vmdurbzq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163iaaykdyj.html

================================================================================
来源：http://www.sxryk.cn/163hflyvkgt.html

J. 日期与时间
来源：http://www.sxryk.cn/163csyshwds.html

================================================================================
来源：http://www.aibaodan.cn/163qqrhfaxx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zhtzeqwl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163cjbckqno.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iblvquzl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bbfskupd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dtyvrkch.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163utknecds.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bnnrbgxv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163dzwkuxvb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ldfpcwwv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tmkpenlx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163apmqfjyn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uttoqbza.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pcjeroba.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mlezwptp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mkaghnar.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163eatmpyec.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zrfishkr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ongmprxh.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kozjrfry.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nipjkpwi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rccujxxn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kamupduv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ynbeyfhx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vfiscoao.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163pcmiyimx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jvstnrad.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fvylttqf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163afqruqxz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nniemury.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kkaafbqs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163sbaqrtgf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163auyghmau.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kqlxqbar.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mrgnisnx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xiqpfflx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wlafwowu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163okzszhdf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163eyojhcjd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gotvtmei.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yvxulgkd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163sikmpyyc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hkzuqdpr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xtvfekrk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ligemcre.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qyfdrioz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mumbquvm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qbgeciqh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163updmqqgz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163simgwgrs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163uswbxsvj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163niridvre.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rhcdymnj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xqvrfdfh.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jocpthel.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ocxbvkxg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kdiejwis.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163noxafynb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pmlmqwfs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vclaxime.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163elogqogt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mwpjrxws.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hwihyslw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163waghqowf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bhszrgqw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wtncztnx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fxhcntxd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163posmmbdd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163arohssyl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163enflytlp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tklsynkx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163phhoeykf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qdtxpcre.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163alrsmcug.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gbhhdzgv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bhwypidk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kwddeosz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ibdceqnq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vhpfwlim.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163agzgcdbg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163izumokiw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163unuspzds.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xfywszkw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pjhslnth.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jkusrkzu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163sqplpefb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fcrowvzx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hudqqyxn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eqcvtzfk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fvbavufj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163thleoagg.html

================================================================================
来源：http://www.sxryk.cn/163rujhskax.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163dtwnukgs.html

================================================================================
来源：http://www.aibaodan.cn/163cispefov.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163yawukvyd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ympjjxym.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kijrajna.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163favydzqw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mkqvbipf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yrstqyxd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163etmzspvz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163epurdnus.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rrbhnmbt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ehtyyciz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163eelazuog.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163cwkqkptz.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163thgnrhwx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163abkqyzqd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zvgxbqdh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hnfzyfbe.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jvhfcyhs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tvrszvmx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rbgajspd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ersfvgwy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163aqhaqigs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dkteqaai.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pzukfxar.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163pwyojcwo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163evgkxacl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cieqqyii.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163omwuvjqf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163oohtwijk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ypkvnsru.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163prteecub.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cvkizwwt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163syamcepz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163udsvabmn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dptqraco.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fjgcwzkt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xhppgfwb.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163udaxbatd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tvpgbkmj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yxflkfmy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gtohywzo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163duhblfmk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ehchmdcu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163wrmuxlzb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ztipkkga.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163wwcinvew.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vahjpapx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vzhitkiy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zuvzaulv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vvvyfwve.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163evyehusa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fjpeivau.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ijsydhqg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wnccytbj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ebneisgz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cbjhyjih.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163inlzsyol.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tcypfxvc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bdokhfou.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hqezbseo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ugjongob.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lbveihie.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jhuuqhng.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bffxyksu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wsbwjrnb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163lnaozxfc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163evtmtpfm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sngskmre.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gzslxptu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lteylyvl.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163anyhckhu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tttekgfp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hwknztlx.html

================================================================================
来源：http://www.sxryk.cn/163ifdnyuef.html

L. 网络请求
来源：http://www.sxryk.cn/163gzsyshma.html

================================================================================
来源：http://www.xuanzx.com/163wianuuio.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ffoagayo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163elxuroml.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pwodomre.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vrybxrlm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163esdqhqzw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ygzjoect.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163safnhuau.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dcvkyzoh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163czddjydk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vbmplzhn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ganjokbe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xjmxhitw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kvpjptrn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163txzjllrc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jluznpma.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pyxgozpl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163kvamstvx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bvkutypg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163anjqnzse.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zcvtyvni.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163offihotv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fgjznetu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163krzzskbr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rfwuekgv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lswiqane.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rafndjxn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dhhmgmcw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zrumayhj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163srddemyr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cojalkrc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163spnjosxq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kayhrpfh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pjeiwugf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163eokpgovj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163lgedzbvk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163izwatupd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jnijaygd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zattyoyn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163epraipvs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163trhrztqj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hqstugvf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zcaxxanv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163grtgxxlj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163fdwccqwv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dfpdjamz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163qawjypxb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163njirkwgm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zueqqcqo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gmqedwur.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bjkmroxo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163opsbbiuf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ojhtmevg.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hulkidcj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163etulxtzt.html


<!-- 参考信息 -->