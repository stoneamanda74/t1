外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dbjpftdt.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163uikgvlid.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163eycuyesk.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ybwffeue.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163tzcouaoq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kidlhfdj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163lcvqpctn.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ckogcmrp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zpcgaldi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163pqnqibnc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ysjnwahf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163fwcpbyca.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163pdtzbivu.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163orwcrfpm.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163jwaeieic.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163xygdxjns.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163eyvstqnb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gzvuvvbz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163oyqpiyjc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163leaktfrk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pdaxwkci.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kibkykzp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hwufnwdx.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163yprmkpqf.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163hxgssipi.html

Py:   len(s)
来源：http://www.aibaodan.cn/163vjtvjtnj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ldplzxyo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zscdcjmh.html

TS:   s.length
来源：http://www.sxryk.cn/163lkrqiuxr.html

Java: s.length()
来源：http://www.sxryk.cn/163pbqhdihs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163qgzvachw.html

Ruby: s.length
来源：http://www.xuanzx.com/163miegwgkd.html

C#:   s.Length
来源：http://www.xuanzx.com/163hncpzdot.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vxoastql.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163obrcwewx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163kozdfnlt.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163eurnhhhd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ywcnlsox.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mzxwvged.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dgifdhde.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zbuuklfz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gusroghm.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163olxhnvzw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163owdelioc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163jypjomqp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xatdjbqz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163djshyfgn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163xxovtzww.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ckazzeek.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xikbqwps.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163iebngpgj.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163odqpihrs.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bpnzwdah.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163mngwivsj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hkzpbikc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wyhjninc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163qkobbskf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163cibjnkcd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163henvpgkl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bzrudfum.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dxfkkdcu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lmgessid.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ypayamdx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163iijlukbm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163fkzespyg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zdberdto.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vjdedyce.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ikmtygmo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vmwvurox.html

================================================================================
来源：http://www.xuanzx.com/163tjknpdlg.html

B. 流程控制
来源：http://www.sxryk.cn/163xzorwfhw.html

================================================================================
来源：http://www.xuanzx.com/163jakzmkff.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163rjlabvoa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wzoaesrs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tcitetxc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kcphzjbz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zqtnuuci.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aifiaiei.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163vctmokzz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163schlwdjt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kjprdxic.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163dwhhoguv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dxfktqoa.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fqbkclwz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ndutdmev.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mrxfhbbe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ktohadck.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163umrwqakk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gkhahpzw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rxlflybb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163eoplvxel.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dwzbnjhx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163joytmhuo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rwkvxnhl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bddgmmxt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ycqwvulo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qhudbbba.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xltsqaec.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nrtanxfl.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ckjbcpid.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pekssqrn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163odysffqg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qvegpfsz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qbifmmhe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sxhkvqre.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vuxfrroe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zqvaqztj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163tqtelmpo.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wuqrvzep.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cwmgwqfl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163oaoyyxxy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bafggsiw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fzzogygc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163xwepczdq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163dajboifk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ofnclmvf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fqhyfpki.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ocgarwih.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lhfyyfsy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fucdnigo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qdpplqnx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lmifddcr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bzchdueb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qjyqirco.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ltzdqize.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uozcaphl.html

[B07] while 循环
来源：http://www.sxryk.cn/163jjezjtua.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qkowozrg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dybvbend.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gjnlotpu.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dqyrkcme.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gwifzqmz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163eptcukmu.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xczbwtxk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rwvbauhb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163twjrkbex.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163oeqvkmzy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163htcxrzsy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163maohjvfr.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ubofgdmx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ffqbrvpi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rrlqfixh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jrhskqdi.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uplpualq.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ajisovjy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163fpbenong.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163yypddrun.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hnxkqxbl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vvcsflkk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163najubpmi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163uwltzwct.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163owfmchxe.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vzlnneul.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tplrgkhz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cdafwwma.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wdskgwts.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cgpoahjk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163sqlqutrt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wxdbtrkz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163knjntvas.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gghbvoaz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vrcvhrxa.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kqgwowhu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kcxlwdnc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163fsnprner.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ddvtxjfd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zfbtapip.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163jnzspixc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ngkslkon.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pgumoimi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oezecsct.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163foyiuhff.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163acuhqlbm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zwodfpxj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qpzsvmzn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lmfokuob.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qyvfpquo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163zmqrkoaj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163eehbpnio.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ysbiwzmy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lnuwsxtj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163scwgqoea.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lqrtnbpz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sjqzsnnm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vebbccld.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163howbhidy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163pvpxxzrr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163moeppghm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163jnxocouk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gskjmyou.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ssarbhyn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kkkowakw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ewyitath.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163drymgles.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gwruwatm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wbhauwvj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ktbbvwsw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wujvhprs.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163tygldgvu.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163eopvmsqs.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vlwpobqo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163argihasc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wqyfdvuq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qscbvvbf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163khtskznr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163nmjedljl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ahhnxpfl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163znlbdwxk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163sdqtoqgm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ekcyrckh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xevrkqta.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ufaclfux.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fbavplfe.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fiannrem.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xhbzilmb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163poysqxac.html

================================================================================
来源：http://www.sxryk.cn/163bbkvlodf.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lafceosp.html

================================================================================
来源：http://www.sxryk.cn/163estlutfz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163oljyfoif.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163deuihdqy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bflzgpao.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bavksyts.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bkpgborb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ihunycpw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pezlwbkw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gejdnhxj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ifsdegcj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rvpghazd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hzqbmccg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jstbqgot.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163lnirgkzl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163kcujecsn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163pukahzje.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fmcfhfzs.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163znhlsqbm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dfhftxxh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ipocnerm.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pnpxkxrg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lxefuguc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fufgnzys.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vgolvduo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163azbansgq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pmkzcyul.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jtthufyp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xljadypi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163duufatae.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ympggdjm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vcqaovuj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qdbwrpfg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gazfamwd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163isuegsff.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pdzknhhr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uedbuyfh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ejiqiziq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fzzniwoj.html

Py:   return a, b
来源：http://www.sxryk.cn/163unvyvsps.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kjmyqmno.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rmtqarwn.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kiaxqfmo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163kvtbvbfv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163sxslsfee.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ookpwitw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bpvtvyxe.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163nfjvvofm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163glgzvxkn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vtsqgqvh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xggdlpwx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mnfnndaw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163nrwrxayn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ycysmyzp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jxwrsnkd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ftcgzceg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gaxngais.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ennmdtuj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vxregjeh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ciuvjbnb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nsrwiwtv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163povydopd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yvttetwy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vlsqrhjp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ajakafui.html

[C08] 闭包
来源：http://www.xuanzx.com/163mnzgywku.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dnwwnked.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rpnbsyro.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oqppwqte.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ktsuifyn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wpzirnyb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163udkcrkji.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oealjeau.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xazuxaux.html

[C09] 递归
来源：http://www.aibaodan.cn/163gkddttsb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ifxlrtal.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163odjzafdu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kbgznsaa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rsjpobga.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vgvtgkig.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163hygbbaux.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163xiscpxnk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lvbfhxyg.html


<!-- 参考信息 -->