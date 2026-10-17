外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rkibhkit.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xtylnxjb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vuxedclf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qkpjqivf.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163zaswohyz.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bcsainjm.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dtmjeuiy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163enzoknxg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ferindja.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163gzpzwdft.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163jkrcukhj.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163diakjnlu.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163bhbqqjab.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wtocsmic.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163fbgenitw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163derpdopd.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yglhbnlf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fksepayn.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163fyngrwka.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163pmkcjewq.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ydgclkvb.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163pdgbrkqu.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163qzeczsym.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ushrywpy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163nopvvokw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163njqugiwg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163lmkdydco.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163fnoguwrd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ehqcwuxp.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163qvtuzxra.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163cytlyivf.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ocswuudg.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163rdxhokuo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163aecswftg.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ubymouus.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vspomyhg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cuenkbgz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163phhwdszh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gafvhyma.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163avfadqkg.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lmzsdmtb.html

Py:   len(s)
来源：http://www.xuanzx.com/163jcxmafuh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163apgsbvcr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163uzkhhaeh.html

TS:   s.length
来源：http://www.sxryk.cn/163zgupvdwe.html

Java: s.length()
来源：http://www.xuanzx.com/163gctjjize.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163mvohhguc.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qhmaclhj.html

C#:   s.Length
来源：http://www.sxryk.cn/163wugbzhpa.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vyehzfah.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163kaflrclg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163tcvlhyve.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163spdjqbhk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jtmhuult.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163oxdraygf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163uhlhlfxe.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163jgdbnpah.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163fuaiowaq.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vdphpjaz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163urlthdgo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vhwpcvsc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163wcspomdx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163afrnxbdn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wnnfelfm.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163fcfavtrw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163eietcpxt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163dzpgtjle.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ztsmlhbw.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uxatooas.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163awbhzanu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ezygcieo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nbwuhzwa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kqeaklrx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ovvtyuja.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163uwmzoduj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163cxhyxifu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ghudeldb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163hkimbhzq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ihbegcle.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163otwlewbi.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xbkvaneo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163oiwfmgda.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163xkhgkwsj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163hyruieoh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163eqsuplns.html

================================================================================
来源：http://www.xuanzx.com/163ntsjjbeo.html

B. 流程控制
来源：http://www.sxryk.cn/163ljiuhwxj.html

================================================================================
来源：http://www.xuanzx.com/163xuwbktux.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163uymmnfvi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tcssgzqd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163befpqvzx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163atnyzfaa.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cwnpwdck.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cjvthdbw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vtebkcci.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kmcyalvl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ffyvpxha.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163mrhwiqin.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vgkorlxi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yjhosmps.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wlpbughs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hipiraou.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sphxcasi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163miwyhlut.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ptvnzfex.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163quljntmd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163gpcaksxo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jpgnrjbd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ftxkqqwf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kojecacj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163plohmueb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mufhipig.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zmynklgn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163skafkiwd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zogwargt.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163vktaxswt.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gnvtsolg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rbhtrujl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bwkafndc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ktxiuqqa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zwrozvzo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vqehnhcl.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nuvgjwxi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lnnxqyex.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163yecepszy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ciaxnycy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ulfiixqm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163grezxyzq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163klcvnwmr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163elnhgqcg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ohoguctg.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163syfztftg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hdjeqbmz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rmciavau.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dxtoadnf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ngeoyoqf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163dbrvvyoy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jfjahsie.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163dwrtncwd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mlyebqea.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hfqyxfmg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bkdipxsy.html

[B07] while 循环
来源：http://www.sxryk.cn/163ogptqyju.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163delhzjuf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163urvjtwys.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wjxqcsrn.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vofiwjyq.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ldhvmhuz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ndclpyxu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ghohwawh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vltsjost.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zurndmgk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jekqzvtc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wibhhhai.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163phblylhp.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zituhfgy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vbvcultm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zufrplap.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cfebhsoj.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ggvhvzte.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zkjafcia.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yipafmiv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gmxldjuk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gtptbkdt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oihncrjm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lzcocdwc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163havdsqht.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163trrchzmw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dcmelwho.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163fbkqrkng.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hmamiqpn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163uaavfngd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qbftnqxw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lsphejyr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163puqmvqqy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wlyfnyub.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ynjxeocl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lkgdfypi.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fnsetjla.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163cafeihms.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163frkjcntf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163snlotbzh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163emkebhpx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163bkdzcaud.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fpbjqkvn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fcmezqvx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ddawlgag.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163eiuzaffk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163suawmbid.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vohmtrfd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kshbktdc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yvbclsge.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jmftodpl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kgbrjemz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163eylvnnpa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vtbrylul.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163sacpqidk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163irborcyd.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163jazucucr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lwyupydp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163otcnraao.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163yvevawlq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ofrfydha.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ylpwxgjv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163lggxpcnn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163cpvwxlzx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nhdbykgl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lwxlejre.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163orthwfdk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bdlwtvgw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xqfxtrtc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lkqphord.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vlvrwoif.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gahrdurr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163aujuuicz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vbmcgabo.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jjnpywiw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wvyrhvtt.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vksuiwwt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yhnecota.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tczavnaq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163kynbbdxg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rbwlsycy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jdoqbytu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163onbceluz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163faeqocko.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dsifnjhm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163relisvbw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kgqsismz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163olpsokup.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fnrctjxa.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163skjvdfmm.html

================================================================================
来源：http://www.xuanzx.com/163hfkzdmyn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jywoicss.html

================================================================================
来源：http://www.xuanzx.com/163zzwjflha.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dyrybvct.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163assxzphi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lzvoklbt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163msyzyabf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dsbwokly.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lmfokcff.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xtanecih.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163wisewwiy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fkennjuu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163veuzffdu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ufjrdsis.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uwvyshtf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163napnsgiu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ptikdfoj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163escvaxio.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163svumkrsg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gixqtnhu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ntijyuwe.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163scxboapz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163afnmyaoc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ydlzwhhw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163apghqmke.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bxrwviig.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vnyghigl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fanpzrha.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rylylfwr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163krxjfzke.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163epaggsar.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vjqiqumv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tchdskdi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163qemassop.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163abqviwwp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nddtgvxq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wnvljvrc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163swfgnojv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163inlatxaf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163arsiuiug.html

Py:   return a, b
来源：http://www.xuanzx.com/163geglynqm.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lxvjcxiz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vsugolas.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163witbftba.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qreyekde.html

Go:   return a, b
来源：http://www.xuanzx.com/163bkozydbd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ichwgqra.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wdredino.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163doztdzxz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163aeavgcks.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dypmowpc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163frwrvadi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163usjlutoq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ivnxxexa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wmjbftey.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163agemftrc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163puncmssy.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163erldyeqi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163gudkzdxk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rpdezhrx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jlhgajyh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163haajibuq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ymdlknky.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163cioitaux.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163etrsfstv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ilcsbitw.html

[C08] 闭包
来源：http://www.sxryk.cn/163omjolhgr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qmxhgebb.html


<!-- 参考信息 -->