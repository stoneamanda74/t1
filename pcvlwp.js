外链999!wailian999！

H. 异常与错误处理
来源：http://www.xuanzx.com/163lezctaxs.html

================================================================================
来源：http://www.sxryk.cn/163ocetkths.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dwfsqzlz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ratqxhow.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zkgfoeun.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ucvfrhso.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163hzawvclp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ipnutpke.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wkxibboi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wayrglew.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qpmyoauw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163prhfotfh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qosaduvq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nemdsboi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ejjvxczd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163usubiwgb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zetoxqdn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rbqkobkh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wfgmhcrc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vlnjccqa.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qgtljpsy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sxocjkfz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163runxrfpu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iumzlkaa.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wuctnrro.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163cxxslwfo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nzposxwg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163nluvmtuh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ejvqwhoj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163corwqpee.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yixbdvsn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163fkzjjkfq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cgwmcxbk.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jxztpywb.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ldekkfsq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163flrxtyja.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163udyrqbpc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rmcffbun.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hjqghabv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ujlssvme.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hihrukkp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gvhkxabu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ndyngdjs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bdlqjjos.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163irbvvzqg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163udfbddfv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mmjdskie.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hzaqdosz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163eficlwnf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163gjcmfhoj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163varickdz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bvfbhoot.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163rgnsdptm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163efzdblrn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nxqhctfp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163agorgpsn.html

[H07] 断言
来源：http://www.xuanzx.com/163ezeinouf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cphjbjzi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wzlqolsb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dnmixfuf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ptljwtqe.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jtllqlls.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ltnhwmdw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ygyjticl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jdmrmpym.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ypvqjbeu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163sytnejup.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ukihwupi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ltovnybm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163clucfrbz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cauxrntb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163yqemgtvc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zmabazdh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bykuikua.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iabkvfqt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163elzcbxfj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hmzamdzm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gjcneays.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kuqlfozq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zerbivwx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163juddrokw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ylykhnpj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xulkjkit.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163amzoywpi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cevwiazu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mdgmybol.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rrjsyqwv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zkmmdlqy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ooxadfcq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wprzujxq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163viqynbpu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mtqpzcvo.html

================================================================================
来源：http://www.sxryk.cn/163lbuwmuji.html

I. 正则表达式
来源：http://www.xuanzx.com/163yjosziic.html

================================================================================
来源：http://www.xuanzx.com/163pagooreu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ytwlbjhe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ofecvxot.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bfpcqqsw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xdakdiqc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ecpfekfs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lfkkeibm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kgvhcsvi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ixjsnliv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lqsvdgyo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tlbeykvr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ttuidiku.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163lxlycjze.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163erskrrdp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pumxljkt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163aptippzk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fpqbxsrq.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fkftfsed.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fnviczug.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ukmyhlos.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163nsvpgjuf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163uxkrlwoe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tdwdkpam.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ynsmvtff.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wcogztna.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163boliqswq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zqqcxqys.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kevuxotf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rntqdilz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tsmhrufh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tsugmuzd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163iwsdhsux.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tscjldzl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hilxngik.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uldalyxd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fvhcrsvl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lsxyijpk.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163yszunvci.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163maozfkda.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ltwpmfaq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zieijqra.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bbbaflnp.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163fikaavfg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bcrfibri.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163udgeipyf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mrwpfbqv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163khtzccwf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163osqplalh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gfihahnl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pdjtyacj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ybpshsnj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ycditbhp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cbuqmuei.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bnhtulyr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mxomvjrx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ikqlkqkk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163shsrsmlb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bzgszczu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163lvqenwmz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163csqdtuzs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qilymdxu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wntdqyqa.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qidwjzxj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163udollqen.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163lhslybjh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ciuzwjme.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gkftkdhi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163alljfflb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ddgebtek.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163fymtjnpb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163imtisazi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163fifllhbx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zhxqwplj.html

================================================================================
来源：http://www.sxryk.cn/163vsrdgfmo.html

J. 日期与时间
来源：http://www.sxryk.cn/163mybtpoim.html

================================================================================
来源：http://www.aibaodan.cn/163nxrjnzob.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163arjiikfd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163numdniye.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163srsifhyg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163suykqjkx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163czpsnewq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ohmcqhti.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wzjwicuo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gntqssyc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rhykzriz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nxsuxzsb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qcdjyozq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kfoboehy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kcnbxuzv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163fkfuhmmq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ueskdlhj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qfwvtmyz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163eisjlgun.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ruflbjsf.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163stjswthv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163nakmdeae.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163yrhclkpw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ouahwtxa.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nvmcbprs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ruqadxvb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mshbbchm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qzrurbra.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wapqlzdw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vkpklntt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hpyoejjy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163oowksdvl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cltxbmyq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zflpmvul.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163svacwouv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uxlqhijw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ifcxtnvq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163voikpody.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jhcwqfoj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163frimslop.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qyulbitw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163afnmgtro.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pfvkclee.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ijioblms.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rloyybgl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ahjzsiod.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bzgvxpse.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gdjvvnnx.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qmjywnxu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jiionaoy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cqynfwfm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pyhqmbfu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163zmueitvw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fzxhwvqs.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qtvvcvez.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kgcrpcim.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hingjuwg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fkjaqkie.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xcdsemho.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163udpocgno.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fdubmzvq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fnncozvu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163flwqncqc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uoampall.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163grwhyred.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vcyvokwn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163knyyosel.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zxktlnjb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mkkpguyf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xbxzmroh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dhddyuki.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163dekxtjpy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uihykmme.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163rtyvtmaf.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wdvzvpur.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cfntrtkp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pbqnvpnu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rmavedag.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ktvjnxvu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vmbmzqsl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kyzldkyv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163uptbftqx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xziwqemv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163qvjwgjtm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rgjaqahj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vyhxmmpy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vimqveoo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xfolvmez.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ynhpcspn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wdovlapk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ldvukbhk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163psbhjrvq.html

================================================================================
来源：http://www.sxryk.cn/163aueiysrs.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163itnlpvzv.html

================================================================================
来源：http://www.xuanzx.com/163qpphvdnp.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sudakuxl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163lotdfzps.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xxxmcpwo.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dfhzmqxj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lxptibws.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jswedncm.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tiwnsisu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163iganpuym.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163etiiqgkn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zjeitfcc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163zbuzntky.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qwhxbjrv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qipliksf.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ddqonyoh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163walwzmsw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qngxoukz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163zpgdpevf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aojjxkae.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bxcthbpe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dqrsrtkq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163amjjuwwh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ezezmwxp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vwqyonox.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bnppczkn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zdlkwhme.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lwreecrm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163lsfqajsl.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zizdtwth.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ohbmkigt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mluijium.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jqbujjwy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sfuksbfl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lfiuimdh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qvmrcozx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163fsvfbxwl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zeiwkquj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163txrfocvo.html


<!-- 参考信息 -->