外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ycvkzziz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mclzkyoo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vxxzldrn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163tpuyxtbn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wtittrua.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163eggtbsvj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mupmizzl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wdozsnmg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rcyggneb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163omkyjnit.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mrllmljs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rzbdhxwv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fqljlhmw.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163umrjalhb.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xtjthoxm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ttcacbxk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163idjnhzuw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bsshovtm.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163snarvtrf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fpxivqtr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lclyegnh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163oesmkkhw.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163xtvyrafl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163efahagud.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163podqxbix.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jbodpejf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163siwxozri.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163anyjsvte.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vfwkhpvb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163edshkqpe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163paaijyve.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163arlphcqb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163krktqnat.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ifrfvglp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ivnnfzsj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nctdlvdt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ztdlugru.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fknhdgnc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163raltvkjv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ehjlxvbo.html

[H07] 断言
来源：http://www.sxryk.cn/163tcnaldil.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jcluzwha.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ojgnhdtj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nhnkfwzb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gdquaynw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ecaqeigr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163txdvbdrg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163sdhmxgvh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kmtqhznu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163aiaibajb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ljopauwc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mbxrnzsv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lojvbkoa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163btztbhpt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pfoelcsb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wfvtidcq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163awpezjlr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163akfzfqjp.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163mteribwy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wfaeggil.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sfxrrukr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mewugdhg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cuirvelf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163oqlospeu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hqluumzj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qqnkvmtn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163eofwffqh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vyiglnne.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dujamsbe.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163amfeocru.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163twogwpbp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gsroemzg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uhgugimd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ekwadhjl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163hnsblsgc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163edaijxal.html

================================================================================
来源：http://www.xuanzx.com/163kejpnbdh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wuykignm.html

================================================================================
来源：http://www.xuanzx.com/163nfmrvkjt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163skfpvent.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163oodrdncs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bipujweq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ppbpyrwh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kwrxwlcy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gbbmigvl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hkiucltw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163qbfffppi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wzdqtgqy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jweucbsm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163qknswtkp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163csiaupkb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qdycuhwa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zafxulqp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dslqlheo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163noxyhgtz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cdrtmknn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tblvptcr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163twpqzlmr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rsrmdahk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163gpvusqns.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vjsdawym.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yjvarhut.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163csfateto.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xwhcjnqi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hmehxspa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gdtxynvp.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dyvuahve.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zhfbmoqy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gndyvgkf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oxbynygd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cxgtaqxh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xonlxcxi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163goqbqmzr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163swbpggjh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gtnibddq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163njmkmxdt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mfprekaa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xlapohwb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dzbqamgk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163emplduvq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163agtocrvp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163qtsqhrtk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163krewlort.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lsrzyxoj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rwdvlayx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iwjrvsto.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163idmzpcdl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163phhkbbhj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qankkpxu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163owtdohvm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lgxqegik.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tspxovxs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mmfgrywp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ehrxtjav.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163bhlvhxol.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wmwdqsxg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163fxhqliag.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pbfdzdwp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163aremltkg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163utnvixkn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ibwdamrm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fqidtfdc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163naptghgf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163abbcmkwm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gctokqft.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tvtxctnk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tepvraxy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gzlgobyx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bkwwqkyx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qfuoapuq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fawxeukl.html

================================================================================
来源：http://www.sxryk.cn/163cejdtdsg.html

J. 日期与时间
来源：http://www.xuanzx.com/163obuznrsu.html

================================================================================
来源：http://www.xuanzx.com/163usmdjbkl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163iszncgbz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163uvqrxvib.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dlbwrono.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jioggzma.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jibbnmae.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kymccvwn.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jvxhpjvm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163llpnpbix.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163unuqsadl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wqlfkgkr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bukeqnpm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pbkofpwd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jgsxsqki.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ygizalkd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ulovhned.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vgihsfqe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163spcqxhuu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zzimevey.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163yyyhtbkp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ltqkgtqz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wqilqqme.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pxbpeyiw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ezapkiyj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xaegtiwn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lsrihcrf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lskachnd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163prvobozw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dqtfxrnd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cocutkub.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163zqeqxrnj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ztzwkkdg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163dlkxgkdn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163gefysmkk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163cosktdis.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wmjeungi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hmuyeznf.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qiodbwqy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jfmwcrgx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rvekfhrx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jimcpbps.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ukdxpzws.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163azzyjmor.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163glqeljhk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xuzvuiej.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ldodmcym.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mjxeqxiq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163chbpiaef.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163urijsmds.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163footiexr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nhvhpdzb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cvlwuhmv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rfugkjgi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cjklbkvr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ykyiaxpv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163nqcstqlf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ynuudizn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xveiiypo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yzwprwbn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jtqxaqxc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jpkrpspi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xtpriqno.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yfkfkaae.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zaenrqtj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qodmorym.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kjdjgbxs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pkojcjbh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163socobuqz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fodkwzwe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qbdvqhrs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mximepsq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nmrhfast.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163txazghgc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jbhdrkgj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163zdowrwne.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163heystjqi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mkitkiyd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163upyvpzwi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163eqfkugvi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163uzjqiqke.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163romhwwjb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163axynxzfr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163tvwaesja.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ztpucsby.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gfzlevyk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ifhnquvw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lknlriqh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ixlrqmjq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ehaptkxv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ummldbvn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163avluwwjk.html

================================================================================
来源：http://www.xuanzx.com/163gknstbso.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163euzgkwgm.html

================================================================================
来源：http://www.xuanzx.com/163xwajvkqf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tytedddz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163wocffzjs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ergoganf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163owojruki.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xmfckdea.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kxksavjb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nnueophg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vkepiaxl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163srpboeuq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jevuzyda.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mumfvkjj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163cjprwnix.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dxobridh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oegvpakm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163pfvbhvji.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pkzhclcp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163snpwmtjr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163psleszsd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lembnpkz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163elkwwqvy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wvlbkqvz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tummdeam.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ivvpotth.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aqaiopuv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jqpytrvc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xsonieps.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tppfrpwf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sndruybj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dkprpcap.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jdbwtzfz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nnjcyzrm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163myxfmaen.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cfpieirc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cdbeehgk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163imzlxeic.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nrbwpoac.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ggrqjxeo.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163pqsbvydz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ctczyvfd.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cwxzomai.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iwnlnfuq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rqiqqsug.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163sdtlotoz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163icfbsruf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cvyxfqel.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kfljjebn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163scuijszk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163eqpojdim.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ybvuwfed.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lkuvaiwo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ikzucwlm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wgpgiwid.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ocxtcpqh.html


<!-- 参考信息 -->