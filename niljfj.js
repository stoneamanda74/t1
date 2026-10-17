外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zxdkphkr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wxbtrldo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163peooxahc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hjkvvovd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163aajwouek.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163oavhihyj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dpwvfoxi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cjfnopnp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zwhqnqlc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163njvmzalz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gobjappq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hvbrzceo.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163adtgdkqr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ucnriwou.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gilmqxnl.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vldzumro.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163twulonov.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vgbjgftg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eqdonwip.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dueddssm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sromzwja.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163yeqfrtij.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oitwpatj.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gstzvrdu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vfdzdtea.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zfhlzjiq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sxophplg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163luwufftn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163uoaqonhc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163exccmere.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163gqoqbhml.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163kvsuutwa.html

[H07] 断言
来源：http://www.xuanzx.com/163fbchrnsg.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163whjusnxj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ipqiqvvs.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nrvfkujb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163czqlutuu.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163aulvdycb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163grpyhwlk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163fzgygqfw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zastkdhf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163choraztf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vpcatyfu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cgycsmpg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163umwknjql.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qbgplbok.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tyzypvhz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yroiftlv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qbimixxq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163blrtlxdj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163pppxvgrp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jilhwnzq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gvkeerla.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ayxxsrjz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lobokfok.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mjehhhnp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163eoghfaln.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163veujgrfc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163lpsiwvph.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fxppgbct.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pycglkjh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mxjljcnk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xhostzyi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ocnsveaz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kdfomwpz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163sixypwjk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ufjxqcmr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lvpksyjp.html

================================================================================
来源：http://www.xuanzx.com/163nqfxwsrg.html

I. 正则表达式
来源：http://www.xuanzx.com/163ylgwdeys.html

================================================================================
来源：http://www.aibaodan.cn/163wyrpmtux.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xazrnwcp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wnkywdof.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mcopgbzx.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qntrbfth.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163putororm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jnansvnf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jpnfxnlb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163stegmwaz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zueqfkch.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lzhmyvlc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163zjvqzdpe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qrqcduax.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163uckuvyip.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tygcupbv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163oeuesixq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ldwhaonh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xoryphio.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dtboipwz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ywyrvbdb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ihybzxof.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vakgsgrc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gurwjypg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kfjkubyr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jsiblkoa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rgrlfisx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163napipvgz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kpgvnafq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lxlutcys.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163tzjcgmzx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fdnioaqh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qqckqgwy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hodpsusz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jrtjmdmi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kxuxpzwj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fpqjmwus.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ysqliuxr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163raijiehy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dyjsanrg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bonjxjdo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rhixstwh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gvbqdhqz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163emvkymwb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kxmcomdd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tykhmkex.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ggujaava.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163oyqzfhxn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bqvgbokl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cgdvvbro.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ttdawiho.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qddnthzs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ofrhmrcp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zpacmzwf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kxkphsxs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cnysuibj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163intztpll.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ekshyhkd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xrbavtyo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yrookdku.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gxenuryl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bbluewlq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vtsarnkw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wjnotjan.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163avzkvhvi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163evfvoabb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163davvlpxr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kqtzudlw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kazpfrna.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fuvqdfcq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bwsoyqdd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163kkbwakzs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zmsqdzbt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gewnznxg.html

================================================================================
来源：http://www.xuanzx.com/163azuxnkxl.html

J. 日期与时间
来源：http://www.aibaodan.cn/163pivphlif.html

================================================================================
来源：http://www.xuanzx.com/163pbgozkgm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mucovkrw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xbqwltvi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163htzzshea.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zvqgtsyj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nksjjebv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kcrixzks.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jafbwomv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jeksdxte.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bvppnskc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vognhoms.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nwdqvytm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jawefqls.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mmufgfok.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163oegdkrqr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cmlijbgc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163skiqjkdp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163odyvxvuh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mudpaypz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163mvwkqamq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dbxwgxhx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wdllqpkb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eaqoejsg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ocshlebp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163aulxhxgq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wicnepsp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bujrinjf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163eygfqjnk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vmynbqzk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163swovegph.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cvbxruld.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mcjdjuql.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rfwxsvoo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jngjwhvh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jwflpzew.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163roohoatb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163taplwjfc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rziaqbqj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163duiohrlp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163paleyrcc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rcpgzrlp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vlbeljnl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kxgngtag.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163irzcceqa.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xqcltotj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163faqsiozh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163roxsebzr.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qacsjppl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ghrphmvs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163uxxhtcjc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163adybnmin.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163circhvyh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zbbbmbol.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rwdhfrqt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fpwkqafp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163aidqtypp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dhjxhsxm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mkskfuaz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vubatdcw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163johkaeze.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163awbqxcpl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yxwkizcr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tnubtlaq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bmukljvx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163glpktucy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pisoudpm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vpzltuci.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qxroiznt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163hujqjuuo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wdjoacbj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163elpmqtfl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rdlmiqso.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ttroalky.html

[J09] 时区处理
来源：http://www.xuanzx.com/163neudfazs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kmcvcfoh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wkyomolj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fgdmkrxx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nwypgchl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zugjqdpf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pjoyrpyk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163djxytrpi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qpdchgfe.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cyiloyzj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ylgdknyu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163btgavoxx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vmhvydfi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pbucffgj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ailalrgx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mphzuclv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163vhalkhri.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mnkyrtsj.html

================================================================================
来源：http://www.sxryk.cn/163klgvmvpi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163evqxgyyw.html

================================================================================
来源：http://www.aibaodan.cn/163ndracfhm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ekkqtjli.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163yyrxfzyq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dptuvkst.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163evwqrxpg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rxgpjaaj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xaumdnum.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163bjkbtliq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fkgyygcd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qidwuuwl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jevsdzhn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qaacnxgo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dqhfztvc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163orvulxds.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tdipsbys.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rzrkwgfu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jjggxeks.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lcntwuxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lzabsudn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bcofalpi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kwwnpuvk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qqbqjmkk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mowwsbme.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tpoqgfpm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163uldaadmf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ywdgfhfs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163sgalcyvs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163whbirkkg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pnfnfsqm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gcjmortt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163cttbxnve.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fcovydov.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fvxiggkn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163obhtqbne.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zdarraik.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nhqqiuqs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hynicraq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163roxjhqbu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qckdcthm.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163prrsipvv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rmhuwhmz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ypbartzt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wtcesyeu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ieljsndz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jkohhgwe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rykbrdhs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zhlpqicq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uvgbkdlk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hwhwlmev.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mfoipvpe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ozjiiewb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tpuoscyo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163niuckvml.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163eaxibruk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163wjmtjqgj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qrejoetg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163izdurbdn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163cjzoomao.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fhqpjezi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iwfiowjc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163agrwyhkz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kejdpnhe.html


<!-- 参考信息 -->