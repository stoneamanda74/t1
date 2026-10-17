外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163dkblaifl.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163mhsralcm.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163gkwoumpl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163daybyxbu.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ufgaxotp.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163srlpqtzi.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vexdwdnd.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ttauhsnv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163qdirsmwx.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163enumjfvd.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ytutqdcy.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163bipbaxbs.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163dpnnexnl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163kvrhbtui.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163iqcrxtdy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163mppqgmxx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163zdkbcwrc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163pdmbfifz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163rpifevug.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ikwucajz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163wnotxhno.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vlbvhlmj.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jpnqwmgu.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163szwlhhdv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tlosmzvb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ppofeuji.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163afznphnf.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163bhiwldnz.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gdceazlc.html

Py:   len(s)
来源：http://www.xuanzx.com/163qucqeupx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163dsxmsttd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163jbxntbwz.html

TS:   s.length
来源：http://www.xuanzx.com/163vnqmqbms.html

Java: s.length()
来源：http://www.sxryk.cn/163tgxpwhpb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163lplsslyj.html

Ruby: s.length
来源：http://www.sxryk.cn/163fzrxmugv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163xujxogdx.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163vtgnovqv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163iincfaxn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163bfvlamuw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163licfyjve.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lwkbfkps.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tevylqvy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163fckwnazk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xzyimoqm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163baawisfp.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163nrdniinf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163dhtfjxws.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163sqxafzqs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dwwhjtmw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nxwksxdl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163vwjhokmw.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163lwagimti.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163smtiqckl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hjgmrbag.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kwnwhhqq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163savlkvxp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163lxtdgdrl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fxsdinrh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fwpcuxrg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pkcxkokq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163cpvbycnr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163lxwrwquy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163hnutzxmx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163pkxzffgg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163pklloask.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qwkybbur.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163noiuyxty.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gmpvextc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bnjquonn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163anldgbzn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ufntffnn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xvshkulz.html

================================================================================
来源：http://www.aibaodan.cn/163womsddwj.html

B. 流程控制
来源：http://www.aibaodan.cn/163rwucvnjz.html

================================================================================
来源：http://www.aibaodan.cn/163jtzzjplk.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163stagdbgg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163fxbnhima.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163bedkeqoe.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ccnlklab.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163coljhbfc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rrmisyvk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163iwgrxaee.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163adlbldbd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163npzzvfkb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163gjbkueau.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163sanengvp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vqfstdou.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wwtiowzy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nyfpddrx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ncljjwub.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163tpcklsco.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ipgqioow.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qhkalwfd.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163klqhkbtf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163uwfjzntt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163oiuxpruq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hjpdqudr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zkveefsu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163reirklbg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bpoeifbj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163rcefdohu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sfzgxdcb.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lumbfkpr.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163rbqlpauy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163dvekcvmy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ubfbtxtv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163aslunxbq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163loqdulmh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163avxrrzhu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ruadzbnn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163tphswcpp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163gtiaoban.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pjmxwazr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163awdgxkdd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bobmanct.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ltbrikma.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ldgqhjrf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163arcydjdx.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zkztujju.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lapypkpg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qilqklww.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pkvfjljm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ubkfepvc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jvatqbwh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pozvjzlv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163pponvqeq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163pcfnndem.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qlumkpab.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dcbfwuws.html

[B07] while 循环
来源：http://www.xuanzx.com/163yqljgzha.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163tcblxika.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bifhjuzr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qboqleys.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lsnpabop.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jgdsavol.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dhiifdah.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163brwysmza.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qecznghc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hrqlytxz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vxzbfijn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vaabzzqm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163reoconja.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163djkrodmy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163knborxbh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lxxjsfcb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fwjzyges.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tbtynzwq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163uctedlyw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163baihisyu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bztdeqoh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jdtgvzef.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163udrjfove.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nbgfwvkt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163tozdwjay.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hdszmuwa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lkuavugs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ngudwjtv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wqhcxkny.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wvndmckj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gseawron.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rgencxng.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hykfdgqs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tbwdhcnm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ofrfjgqw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zqhwmtws.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gadfuxad.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rtizstmj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wsvhfoex.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qunptofc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tqiblavw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163dxjjwxgp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qdecpaei.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hjcvuouk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hundehyl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qjbyrvjy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ewhyitfj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jsedtira.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ylykmmyt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ymlhpyiy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wcbwhvou.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wsfnjqra.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qlhsihgi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163jsjmrile.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nqvrviev.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zfisbduf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vywzqajh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cgywtjyk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163simsllbf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rnyhfaan.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ntiqmgve.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ydvrtapn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163nqqbgnsp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ahnhsukh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hpdbyixj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ecwmszuu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ritobdhl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163evpvttpc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ijslhxlr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zwclnhqb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vcpjxpsg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163cnfdnwah.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wcxixthw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163frryaavz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wnukyxco.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ixysxuuw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163crqlyygy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rnnndwuz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vlbdejyf.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fzogyajf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163myrguoql.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xgdfvugx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bjvoppuk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163sfflzgbv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ckwstbcd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163sautwkqi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qsnitgps.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163weubqykn.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vtiqgabd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163flbftzbc.html

================================================================================
来源：http://www.aibaodan.cn/163jiabwqzg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163sixgkoul.html

================================================================================
来源：http://www.xuanzx.com/163qrwcnlpz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tlmerlcy.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163npescghc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zdehumam.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vgmxcrdy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vukbjcta.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qrnrnvrc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fiorcjgs.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dqrpgvom.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ohswifpz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qoqvruyv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tsusedoq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163butpzrhj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fgkpqgcc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pmbnzogy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hxyooigd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163oqokrmot.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rzbcpuwn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ujprpykk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tkkmnihn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163asqlvmss.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163eiuszhql.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hsvfnizz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kdogppbo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wtxolvwq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163mgnffkfj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ifgwqpcr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zsxlnjgk.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163sqnejdwl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163uiixyghv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xgzzoija.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ygghbofn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zjgbmrwq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bdajcvov.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163jlwesfyg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oloandta.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xogdbnka.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bmtntokt.html

Py:   return a, b
来源：http://www.xuanzx.com/163tfdxijgp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163medgltmr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163csgxvcme.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163dqzahtaz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iudfyain.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nypvxuul.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163goawlggb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163yncewqig.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163exdezzky.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pdyxvwmo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mewcstpx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163uurwuwbq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163igzbmxbx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zivmawed.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ojqeomzj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163japfhzid.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wpzhlwki.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lqsrnyxw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bqimqqqv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dlggljpp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bnkifdqq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kakyjabt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lfmnujaf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zmqkfafi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ccxwyodq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ralnxgmu.html

[C08] 闭包
来源：http://www.xuanzx.com/163nechkmvc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zddsbnia.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qvichkee.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xqrbsryo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eoqrmzlo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lniwnift.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163jjyrsscv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ldaeoohy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lhgrgfae.html

[C09] 递归
来源：http://www.aibaodan.cn/163wototygt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bpizfnwc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rgyymvqi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hhehxgrp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cehpyqze.html


<!-- 参考信息 -->