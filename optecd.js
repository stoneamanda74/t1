外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163uahqsiqy.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163fykutood.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163hcvluzjz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163symjbcuw.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ozewkxsp.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163xkowomsf.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163plxlelwv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163nqeerpok.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pujrqpmq.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ciwhcqpw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163cetpjujb.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163xpwueeio.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163wdcpmqpc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163oczxrrur.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hdyqmhib.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163slycrzqx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163uaoevjnb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hweyxksy.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163dcguwrxp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163cyswjbkw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163npbgwmtx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163zqweckbl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163wofrasue.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163owrxshwq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163qmkzmswm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163towsbyue.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dxsrkana.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xugufxhx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xgksdsjq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hbyornzq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163geipvhag.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163dalgqkrr.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163asbxwsfe.html

Py:   len(s)
来源：http://www.xuanzx.com/163xcxlaygy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163opqjkgum.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163kbmyejna.html

TS:   s.length
来源：http://www.xuanzx.com/163tgzexlib.html

Java: s.length()
来源：http://www.xuanzx.com/163vlmgkwcn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ovjduhpw.html

Ruby: s.length
来源：http://www.sxryk.cn/163tuexoadk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163qeyogzxf.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jzokglnk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jrlguyrj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wcpcbrqj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163clclqfrm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ixqdnuab.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163laqwkvps.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pfmiqpvj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163harflnvf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163vuhwzuge.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ehhrfint.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163igpghuxp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163fdrihokx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tguissyp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163itcsdvrn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163cwznwcjy.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gcqsmixx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163gbervyxi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fkfabnwd.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163yfnbwqqp.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163oqjqcjcz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bmuqwxai.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ozqapwgs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qfcejdxa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dxepzkic.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vbqfzxym.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163psrnxisk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163hexcinmf.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163epnozpnz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163sxzoauyf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ibwyyzla.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nplqmsgp.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rhkgxmga.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163msfimcpp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163kdcxfyxk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ndaaxyoc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163sxybjegl.html

================================================================================
来源：http://www.sxryk.cn/163nymlrjwc.html

B. 流程控制
来源：http://www.aibaodan.cn/163emktpsnc.html

================================================================================
来源：http://www.xuanzx.com/163aqxjzydd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tlemjdyq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gtvskzpv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vixtyhih.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rckniten.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163suwqvsxt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wsswwqzk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ottmjlae.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163bwkttglc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fofvvajj.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xysuoehd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163lfanlfff.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bitywusg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jhybzuqr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fvcjowwi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wbswlhmq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ysasmmvd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163bjrpanwx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xrkpsomv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bowfttpa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163bvkrmkvb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pwcudolh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sqexjowe.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ieozfheo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163agvqbqkc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jqljisui.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jsskzxwf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kpdznasa.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163rdcxrndf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tndzsrkj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ccegaujc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163esdazbib.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ecfqpwhn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163azeggxmc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bsebbjtc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gggrmcoi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xreykqjd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163fnzlfaos.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163quchniuj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ldoteoxe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hlkrcrjd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163civvvfgd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ltfgzfid.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163rjnaktvt.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163camhjdrf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163xscrmjha.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rlguattx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tfvlrdyr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hkmgbflg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zkipwvwb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nemwmvbe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163suzvhuea.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163xpfnaekx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163bgorjuqa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163srxxrlcl.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nprgkgel.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vismaeqg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163skeqiehl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ghmziuow.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kvxlwcuy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mmofobcc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163eehadvkf.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163zhpsvxtm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kuwmzcoo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163awaolnkc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163pjbpwosm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jqdkztcm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gpzdmhrj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yyhsaqey.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mjkbvumb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zjyefwus.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ejkprubx.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bejkscyl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163eqtrokhw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163cgeuzfxs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hnhpyacz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wgkectax.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yzjuzpth.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163juhoiscn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xmqeqvud.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vakihewe.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yxolrswa.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ygqtlimz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wmgwmdks.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163gqovigeb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gcuqhqve.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163oenmqxsu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zcdvrhmf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163opkwrtot.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nhznzsib.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163uztaepxa.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163tytcxhek.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mjbgnxpm.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dznllxms.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mvqvegek.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qdafbmcf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163bwdkvtua.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163akbrjejm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hccioecy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163erpdzvyv.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163txavmgts.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ghyibutc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ykplyxzy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fzdttkta.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163waelvlex.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qurshgkh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163bulumsxt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mriothko.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pjinugyj.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163frchanlz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fdencwrq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uhcdhfey.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nheyitpo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163swjuzdck.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pflvivsa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ndizxqxm.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163yoxeonst.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zsbfvbrt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163amidplgo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163oxuunkdu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163yojhcigm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xbgiuidi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pixdvllu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163wporslvx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163cmyqfsxu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163grmnezyo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vdwsrrid.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qhporxhn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163iwgkwzbx.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mjtcctvt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ggnorfdq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163eklhxuul.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163iuiqorwz.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dzqnleej.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hvtaxbgn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jclfcnlm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ovhqlsgf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ynjqjkeb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bjlqnvih.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163aotptbvv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ljsfmbhr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dwxbnsor.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163askzwjmd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163izdszisr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163boglnlzc.html

================================================================================
来源：http://www.aibaodan.cn/163omrppygj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mgponrlw.html

================================================================================
来源：http://www.aibaodan.cn/163mqoiqiim.html

[C01] 定义函数
来源：http://www.sxryk.cn/163pgowiyyz.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163zowzyeju.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vxmstvpf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163arzmzdgj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dmucjzwm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yxxlzzmg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ckwkzeex.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nxnyerjs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ebqfpdnx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ohyvwewn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163crjsntuf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163iomsnqbz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ieoqajus.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rneugwrk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xjcdajvj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163niwngmjg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ekcyuiru.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kjefvwho.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nnqfljev.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rqhqbmri.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163sdifvzzs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yfsmpckb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fheukeds.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163fupjoywq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163raksxoei.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zoggzyvv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163otxsfxjc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mspskqnp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wdhcpfgt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qinrnmnu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163omjjgltt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163wdubehmg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163uptpicdq.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nrebktrr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163chmsmygk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163legmjtbb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hjvleprw.html

Py:   return a, b
来源：http://www.xuanzx.com/163xkllepsb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lyxpcuze.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163adrtgdmq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cnldbpau.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lrmiwqhf.html

Go:   return a, b
来源：http://www.sxryk.cn/163jfcrafgc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bfpkybfi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dzvujgdq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163mlghvswk.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163memyaqmd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163itrxdmkp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ckalnatr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ybpfhanj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yqteqjjh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ebllacqx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163aaykyaik.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ddfhbrds.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qnhtppmg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163snrnhgbq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wjrtowsl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rkczreaq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mflzezet.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cihanbcn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vkqmjdib.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qeqfhwgt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163oojtaktd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dpigcrun.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163eexpdmkz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hoyvivvj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hfssudxj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163eomiejer.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bmygxrue.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xtszphpa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163znmnajui.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ruzydopr.html

[C09] 递归
来源：http://www.xuanzx.com/163xkyvkghx.html


<!-- 参考信息 -->