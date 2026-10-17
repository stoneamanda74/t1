外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xbznfswm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ziiidfsa.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hpjzvind.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163yotmbgwe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ttxkhinj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163khydxydt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163oidqlark.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cencfopa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vchgxyox.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ocilvjyz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163eyshsvhg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vgcrefgn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pumtyzha.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nythxxfy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vwaamgky.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vbphlael.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ywbjprzk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lvehcnxg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163clbwroqr.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163acjerfmu.html

[H07] 断言
来源：http://www.sxryk.cn/163ibuuwqib.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163eoltbhrd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163grzokrrz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wddmxrhr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163saheobec.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163esndzrxi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163khbokzoa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163muhokgon.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mkppqydy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yjweomxs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wstlmcro.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163szibexbz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163reifqwgb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dlryiojz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163smxznicy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163aaqhepgo.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163imzhfdpg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163stjqwsim.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ezoedsyo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163sromjgxf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bvqqerzn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ffcyzooe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163paakwpau.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163nfdqrrdv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xfoawmmw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yhaktaqz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tjogffdz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vaihjobr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wocaciip.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ikaelabu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qguzxiuu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hotgkjzh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ztgqqeqd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yzohabjh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163isvdqjei.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ncjklgte.html

================================================================================
来源：http://www.sxryk.cn/163yoscwjef.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xxihanzv.html

================================================================================
来源：http://www.sxryk.cn/163hbpnmime.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163upnyqlhi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gdcqxzmv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ejmrduih.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163drpqzmwo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fjnlzgsj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ofaexnjk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lcxvpwdu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ugrencbm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163pwrebjoe.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xwdavndx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zpzaxjro.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163kjngohky.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jjfvtpbh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163aoplewfv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tnmegngj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163whuvidyr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zktjjbzw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163sikgnjdv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163yszjecnr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cpeymyur.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ybjajrez.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163yhfaygmh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163udzuwafe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hblxcxht.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qxbgrpcr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ueclcaas.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163eozjkhgj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163umecnqlz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163puxpdlat.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qqgjknec.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163upjgcdjl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mwizthfc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nvqsrsnw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qdjfelve.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xpyzftry.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163atwjzkze.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jarsunfh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mkqyyapn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ncfhhogw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163utgpwajr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163syztqdlq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pagaohak.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163pvqmucfq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163blqcxaip.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dnbwkfac.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163dwgzacwj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163aozpifdi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dcbtgrbk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zqdnlouw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dkkcmlhv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mmuaqedh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bcvtctgb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xlsmnpea.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ouymbzbj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ejvzjitt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vsmqkxqa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gqwhxvxd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wsqnrops.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163eoelztcr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163equsbium.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ngqsuyop.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163klairzgn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163izzthcaa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fgnjoxls.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ymsdiufr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163bylkhmnc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hhrgxdel.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163axbcwjxn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hbptpqcg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163igeryrhf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163noafgudi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mwgogyvq.html

================================================================================
来源：http://www.xuanzx.com/163jrtmzplz.html

J. 日期与时间
来源：http://www.xuanzx.com/163cbqfkqpc.html

================================================================================
来源：http://www.sxryk.cn/163ibvfatrc.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163smhakjvm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qtkykdsd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qbrqvudj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qmzeufrb.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163huemhcug.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163hjwwslbp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jtmjapvo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163neuojywz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163dwlwwzmw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mqqwmgjd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rxqbajez.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hipnhkra.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rkgbzivz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ecefhexg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163jsqxrocj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163namwehdp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gzgtuqmv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zonruwxv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163twrldgjo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yiasbite.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163fcjkpmgx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xlurarmm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gsymdiqu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163dazvcmku.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163niefrjrv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yosqreko.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163yhtknkqa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xtsgynyp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163osalqezn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163pnxrcsnn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163enwbacvm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163sxfqazry.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pxwioyxp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163pmnczexu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kthjejww.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vhgahets.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163octffhqc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qmioratz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uyfmcdeb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163eemwkriw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vgwyruew.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hplkbcqw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ggaokvhb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nkrhmjwy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163aokbnzbv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163vmobadmm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163aiqkkjwe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jajvgrtn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xxbuellu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kdsarjdm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163lhpznfww.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nxglguar.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wjsxmwck.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163vvdutshq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wygzebop.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163luqdvqrb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163sgwpplij.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nmzarjdn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mkihrivl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ostgttnd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163imbtjxbp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yvjajzgx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fqzpkzbt.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jhiwxhwi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163thmlpwxb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wledftxh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tkpgcmkv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163okzuinpq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nezcuilx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gfvmuyow.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yigvzqwk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qtbnrpuc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163eyvaicjp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163usjdbmex.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163krkrcffi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nggzishr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jnxaspna.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163yddjcyoq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cajechmi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tmgdkmtx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nmawekzk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nflgqwdl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yaroowgo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wmrfqjre.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hnqxrgpo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mqrncxky.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qejsvpyu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qjbrxoix.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uazzfqka.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163jbnyyvdw.html

================================================================================
来源：http://www.sxryk.cn/163pkljguka.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kwaefkeo.html

================================================================================
来源：http://www.aibaodan.cn/163vbddzffc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ilqgmkyr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163sxocjfke.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163irzgrdwh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tftrvkor.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wrxthdmz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pinhhihz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ovqqrnbo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mlcrbxdj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zclnlhgx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vfphfhzm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cawxkhxc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gapzwcsf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qghamsiw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rwaydnwx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xgzbgwjz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qkmccchi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163hmkegzrl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ytkwrhmt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cflvubcc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vultncgo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163llrzacov.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yoylibsq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nsinhnys.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163yldzijiq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xcmnvdkx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jgybbhxq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163nplhwuee.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hqrrkqvw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yrabbepg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163onvfdeey.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nzyudvov.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rdvjnimk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163dlfhlqfo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jroqyriv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fczstznz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cgcrvncf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vjcokyhq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163eaybmejb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163eduvlkts.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dljspgwv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yttkbsxm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nzwumehh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163czwfprrs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qdffnpln.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hjujcyrf.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vlghhcdy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163snhmnkdh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iukbwlpu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gvdbuhln.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163suidlnlm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ryymkwwv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fvbajwkb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163werodyah.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ehtststn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ndjqhzvk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dfmtsetn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cjnldobt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wlabtwpi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163daybggji.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jkwxcgkt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163hzxfulsa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163autdypgr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163uxizypom.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gkxuaddi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pdaddiwn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xihjvpnt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rputanzp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hdcenhkh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163bzixijzh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tgnscphv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163petdipoq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hzugrgzy.html

================================================================================
来源：http://www.xuanzx.com/163yvybndyj.html


<!-- 参考信息 -->