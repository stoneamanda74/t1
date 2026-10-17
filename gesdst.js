外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163eephiieb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163eovbvkne.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163lnfpoxdn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qmbqaret.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163abxmgyzo.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163zrcqeuee.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163volunzuo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163micbswsw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163npditznj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163gdgpylqr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tuhpxhmy.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bhpeujcr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163pbrnwqoa.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163adnywcmv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rlmlnhnw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sgbtzgln.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ymcepjvs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rmjlltni.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ztyprkjj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lnarznfr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kdsnxlfz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163bltbccft.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163csdwvncu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163afkynhzi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fngojhkn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ncegzyig.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pqvoydyn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lfkigffx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kyxdrppp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ejpaxwlo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lbxdjjjw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vlsylkyu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ruvenwbi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rekkukyx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163amfxepqo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yarwqcvt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163afevicbu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163raelkblv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dgzhddty.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zzbyrdns.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pwzgnzcj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jaomjats.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163eddxzuvd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mqpoltqb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ktzjahih.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kjwjworn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ktfpvcan.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yaquoxyl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sktfhhps.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nbfmnkas.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xsqexsxj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163pozuykwq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163skoabmlq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pjewdaer.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wyxnewax.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ewkptpba.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ymodhohs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163drbctkmd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wlsprkdy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ptmxwgrk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163iasiozmu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nncvsfjz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mkywvabc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163atulxevo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163esdwjxdj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xcvflypz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ouszqztq.html

================================================================================
来源：http://www.xuanzx.com/163qzrkhufe.html

J. 日期与时间
来源：http://www.sxryk.cn/163odaciaoj.html

================================================================================
来源：http://www.xuanzx.com/163pwtmokao.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ftuwzaek.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xctwriiy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163upabdmzx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rpsxrycw.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hnoyddln.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163medxsmoh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rhlquxfo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wfvyrvto.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qybafikr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wcapblaa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qwakazgr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jukkxdwz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vftavbyq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vqsvayvd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163aaqimcpt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163miyiseog.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yfmgrggk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163eboeishn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ycpzpuyu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dxzmqabx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gnaoyxka.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sqnajzmq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ezbculpj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bmsyucpv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mugdebmo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dflnsedh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163njbtrajg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pzfvozli.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xyuhldwe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163utbnadqc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xbprxwgz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163katxkowz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163hbvrzqgm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163aypampgc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pgrdpovu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lacapwmm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iqqpljos.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163sfjopuiu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lxwheyxu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163awwhhsmk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163grsfduge.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qzzmfapf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ypodyzka.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yqdsqgto.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bfhqycdq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mfdjxlqd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gfkkezua.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cfxmbafr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163flmhjlaw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xmtbcmjd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jrbysetd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163uqegvxhu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163uprvgloi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163htdoyhwd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vxlfqpod.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qegjwzys.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qihwuucq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jibbnfea.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163htluaxdq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ieckhhwl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163eqawprws.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yflssbgx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nmzikzig.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fjhgpzfn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qvwszsse.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163afitybkl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vuavsfsp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zdkntdmv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163seixaqmm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cgdtpccv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163twqwfzxd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xlsqmpvr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bfdcztxt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hvuqsvbh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mxcffizj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wwilyvwn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ugvbwofv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vqxgqbtx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cpioujeh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163fenrmnlm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tcsgcysj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yyqpodif.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ygpjncpp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163elvjemqw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163awknwwlo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vydlgyqn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mnsxwzia.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163tnrzvynm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jwufrupa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163apyfljez.html

================================================================================
来源：http://www.xuanzx.com/163avcadlnx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ipvofjhl.html

================================================================================
来源：http://www.xuanzx.com/163tqexcfhg.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jayzkrzz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ysxtidpn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163peieemkg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mecjgvhu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163povpzggi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163usvlenjj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vvudguqi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163adnredwx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163wlixsuta.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ptpumpjq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163fvgqolra.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zbcekegw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rgzmzrwt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163odvacoub.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163owdyqfls.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iqvpetvg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pngndtvj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ipsqmorl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xfjynyrv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vklagclt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lqegjsyr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yiysdjxz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163etwpcgqq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163perrmwvz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163omyglcyz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qezvavcv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163baqimjbt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lhvvgzgz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163abfzaujk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163utjobyzn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cibrixsi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rlmsftbm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lvdwpwqr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uniinslp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xsnlipbe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163cqedvutf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163fejvgemi.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163conxoncy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163exsziwyu.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sbcvbzhy.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lhjcqzve.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163qnjaotrg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fhfxqbgz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wyvaqxwh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jlgdlhkm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mhxuftlv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zjxopjdq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ksxtkekv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163stgddmgg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163auurjyhn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dtikgflj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bbwlcoew.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lhrzqdbb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xhzwwqyo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163pfefzlpp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ikecpykn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163sosqldth.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fqmodoss.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ghxrrcpq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ujscfyww.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rfxphobd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163krjbbmxd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163afvdmpwe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163prtyfwuj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163utfqcsiz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163olypkqzn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fjbuoyol.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vthtxtob.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lytvgjxg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163nzfdnujm.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163lqunghjd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rmbrpyix.html

================================================================================
来源：http://www.xuanzx.com/163mgiywssv.html

L. 网络请求
来源：http://www.xuanzx.com/163xdjydswm.html

================================================================================
来源：http://www.sxryk.cn/163smdkzczn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163anqtleij.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163nlkacjvp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qvbdmmzy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pasiqzcy.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163urousrqs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tfiiztre.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163vuyhyjcp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ujzztdmm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hpvcizaq.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dnkhziel.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yhvzzcht.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163yqjadrwl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ooxoedjp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163usikqghr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lscxdrmu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vhtlkqhj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163moavinzo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163atunopze.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163reylacwn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163daezjwwj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163njoanrrz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cphzzqqu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163piwtbxig.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qjqpviej.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163efcmnrde.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rlfdpril.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wwszslei.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gtytkguv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wjddioui.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uccvueaq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163avaoozud.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uxwxlmqs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mqxsdvcm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163kvgejfrt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wuzqfhbw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ttzezjzx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ojqvtgut.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tereqprv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xrupjwbx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ouisjvho.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jdrvtoip.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163quzvqeza.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163sekxzxdl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bcbkdrhd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lmtjqfwt.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hzxcirkt.html

Py:   resp.json()
来源：http://www.sxryk.cn/163uspuznbt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163sjjtsztn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163sdqqocem.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vdwczdzu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fxalpkya.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163qlxbunbk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mswyrwqu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jckxuiqg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ytbjrsik.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ovrwqege.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163knhfngjq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rwpzylgh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ijwmyoem.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lfucwdzu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dxgjypga.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163frpqcjsu.html


<!-- 参考信息 -->