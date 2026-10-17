外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163roavtasg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cgskrxyr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163cyqancvt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163cyvmambe.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wupeghda.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nvijnvsp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lgmpucgb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yvgazxbb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163brdddsyr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163aywuombi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qhdnnhln.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jovfiuni.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rdbmbtwh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163oaxemyxh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163enekzkar.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163sdwdlhan.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ovkwylip.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163znkppulw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nktcrfgh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hzrgwqsj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163bcscpjwd.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163lkjeuqse.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tvgkxwus.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zpixupny.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163gflxuyxx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xxzduwtk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ykvembxq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tpipquaa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gjthjfnx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163iiazmowu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jfrwlcjq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uwhulhwe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163grwmfuqw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163sxlrubye.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bpqkaccd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ruucdlyf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hipgufao.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ajdtwyma.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163giitvuim.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jkqrkbxd.html

[H07] 断言
来源：http://www.aibaodan.cn/163hcdctwww.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yodsrlzy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qdimkowx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uszplupq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163avvbfhgg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kuxwcmei.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xafkziik.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lwuzzyye.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cegjcbhh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wmhdrqnw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dbymcdnj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163czvlkquz.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163astjvgoe.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fexekaeq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yhznqdrv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163trxuvjys.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qlrbjvne.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hshjiyhr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yixbdjrr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ckfzsajr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bjibajao.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163olzdioaf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163akstgkbr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ahlvyxyf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mostqsje.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ufhrhjmx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ozxqhwyw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163msbrgixz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zhgyisyj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163mnovfned.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lgajnlvl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163blbttxkg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163eklzxfau.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163trpovuom.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dcupuxri.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163slmmexwy.html

================================================================================
来源：http://www.sxryk.cn/163kedesgwx.html

I. 正则表达式
来源：http://www.xuanzx.com/163sqxscrqg.html

================================================================================
来源：http://www.aibaodan.cn/163chdgfujy.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ojtqwlit.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163cmmcuawg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rgrmzewk.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zwxsqlxp.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vvfoxuao.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ubgdtbwe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163iflqjacx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dqdrbkde.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163yztghhpd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163authtbzs.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dghdibds.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zehlbuce.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yavxkjnv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163rwtyfvnj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163scdbrkhg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163bixixoml.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163msxioirh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ftpnyejz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163sseuulod.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163twbccbyh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163uwbtkizr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vlqaixdw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ormsmetu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qaoqkbie.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163khbxspgy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bpnkugul.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dcgrdmie.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zjlprmwr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mvcujolq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zojzzuqd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qeqggsjn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qfjitgwv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zounfgka.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rtzfiufp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163iuahdfbz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lkvnugoc.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gburkfic.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ezdmfhbu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gmwooaub.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bgykvryc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wdahyava.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ufhqxgkn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rfqvliop.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ivvpgjed.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tynuwgpn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wcvtnuzr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fhmlzvcp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qgbesfcq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zgauqvcz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ceftnfak.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bfxfqsdd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163lwqsiipg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vihminhz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zgvhvhbp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163trkerure.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163wbxahsmp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163foaaxbhd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163pfaopibd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ibevmrai.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gkftimno.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pokyfbgh.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163uodikqgx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wkzlfyts.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vqkrritc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163otavrwbe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ungtscpc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gqteulle.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ispglszm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rusuugdz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hsumffbn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rnxzinpj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163yjtmdaov.html

================================================================================
来源：http://www.aibaodan.cn/163gpoidbxg.html

J. 日期与时间
来源：http://www.sxryk.cn/163sfezbzya.html

================================================================================
来源：http://www.sxryk.cn/163fjtzmhtz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cfxswfkn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qtxpsucp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hkrdqqpz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163exmtcngd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hndysgly.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163sskhusdo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bhesnojc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163trqpanzr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pahjjcgv.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vlrdcidf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gxgtwqje.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163adxblrnz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fgyuxmcc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pyptnrgy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gszcanoj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wotftpda.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vuvhhige.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cgjopjsk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nddgusnk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uoctewyk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163eeirecof.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163shbsmnkw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ggcspykh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ojxuhcks.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tutaelke.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163cjnkxbrp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163usqykiwt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163skdmgvec.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163acocojss.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dkisglcp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hfpdelkw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gowtupin.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ynmxiaqk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163sqcfimtk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wqhiwmnt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rdbvqkbm.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zkodhibb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dujrrxfx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sloagqsr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mjscmqay.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lvdtvjru.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163sugghtgy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163czffyotl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163quhochmu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dlljtmse.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qzzsotwf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xclwcknz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163upicpoht.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rxpjruzg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163avpzhjwc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ilqtiuaw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dnmxlbkg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163avecivlq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nygmaste.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vhwzdihl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ryiodbll.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vbfiychi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ktrapxsv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ztoayqbb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kahcapli.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xdwsuerj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ettpoheo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163noqrokdf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163kjxcugfu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gsoqpyuq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ubbxstfb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163umnrgbul.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fpubtvov.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163djwtaqzi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hlhxcpjh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163khsqvnru.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163shhagqnn.html

[J09] 时区处理
来源：http://www.xuanzx.com/163txrleepg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163grfrlilu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163jsvgttah.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gkpjbede.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fzzltmsa.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yfyajmhn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163iaxnecjq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dueypwal.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yifvvhkc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163svukywqk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yoliooyh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163drvbdsjh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163gwsjbvjx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qitgcrtw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bubvuqmn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163sivhysqh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ovyxarob.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163bkuvnaok.html

================================================================================
来源：http://www.sxryk.cn/163igptxlak.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163aeomglxk.html

================================================================================
来源：http://www.sxryk.cn/163xuwlbpng.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sedypvif.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fkjcxkhh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vaeloxbt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rgfmpsns.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ohmwsepz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kgryqtpv.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xlwoqoit.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vebeepjx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mgcjheto.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163axjpdvta.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163svepzyik.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163okmbhnrb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wsijlxad.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sbwbwgxp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nlaxqsaw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xpmxsuqu.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xdzugdqr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zmpjmeyo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163auyrwkio.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tetuqpzr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mncmovht.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hhcqewec.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cuzqxvkl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ajweeywr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fwkqtkzt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lctsraxa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163jlodnkbb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163bnbiedfa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lpeawxzg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163aimzifnf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sytgnitq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khecdowc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163nglcicxb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163weeidnlx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163riixrhkw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163buwlwajh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tkbequga.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lygzfhgb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163bfcuaffq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bbslgjlq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ughwasgl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gykuexkq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163msfkegin.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wchhawid.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pdvpkdkl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163iojfwnhm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163slwcjlrs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mwrsnvvi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jvtejell.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163occtyfzc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nctxheeg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nnjrzruh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163otibugyu.html


<!-- 参考信息 -->