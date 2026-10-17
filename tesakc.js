外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163sjlyxitc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163eoobcgqh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163fiwtbewk.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ksuhqwxs.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163xsnjopxf.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163pagnjoit.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cfpikokc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163uxbkfnwg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163sjwlturp.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bjqcprmb.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163cqazrjdk.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ddmungwt.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163flhzmmog.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163dfangtqx.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163gynrpish.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163oilpwefe.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ceipvjqh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163cpjkzdjv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163pifwnqrm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163bcsqrgmc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163zurrsupc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163tciqeoyx.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163whvzmzyx.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163mfwpfpef.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163zswcckhl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jqmplexd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163anfsvmlh.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ktbkmahl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pstzzxzf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hzowzqef.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163acymibzr.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163xquzpakj.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163eesjxqan.html

Py:   len(s)
来源：http://www.xuanzx.com/163kvxkmerj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163icopnxyf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163srcypcyf.html

TS:   s.length
来源：http://www.sxryk.cn/163qcdjiyha.html

Java: s.length()
来源：http://www.xuanzx.com/163egghxszv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163csmjyqyk.html

Ruby: s.length
来源：http://www.aibaodan.cn/163iesuxjay.html

C#:   s.Length
来源：http://www.aibaodan.cn/163tqiurfxo.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jpbopapz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163cvdttiui.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kqjccdvi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fsljwoaj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dhfgzalz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zzsgebck.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ojyerbvk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163sfdwambw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163iywelsca.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kmuoemfh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163sngppjey.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163seyyogaf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gxoteseo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163egmbhsqc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163fefeppth.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hwkkcstj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163auuywfop.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fhupnqlc.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lbqsoquc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163mmysebbm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163daucamjr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163sfiemghh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bkysmwmc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163iicslqty.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163uzwfywge.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dwwiwaoq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163rcwxarfr.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163aqydtgms.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163yddfzhid.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163rwtzwqfv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rkpfzmjn.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163aztjpvdd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163rfwrugbx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163lootnpbt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jiuskagr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fhjzedtq.html

================================================================================
来源：http://www.sxryk.cn/163demzoceq.html

B. 流程控制
来源：http://www.sxryk.cn/163xtiwyagt.html

================================================================================
来源：http://www.sxryk.cn/163kgauktol.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163nikykwoz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163funzfnbj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163unsrhduf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gnkxfqnp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gquwzqer.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kpjlenjb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163usmwapsm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163riwxrdmw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hcsrdkir.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fgofunsp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163nttbopgf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bwzfuqdy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163benghjdv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uvqwqrgr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ieinzciw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tliigxdy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bbaduwue.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mizwqqkb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163expzeyqu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xjqwkvek.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gupbxosx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kpfryvyf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163aevufajl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bvaqulph.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163nlekhqqy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gigbpsxn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kfgfgpnz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jjybbvcv.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ozhktqlm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163dgqlftjn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tnofpmhk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dbenqukc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163uezxnfkb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qwgafvrn.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vtotekwf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cwlarglw.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163sxybhffd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hpwykoap.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xgyjifri.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gxvdnpfa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163exxejbjm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163njwitqkr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163wthgcazc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163lpeabubx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lxtsngsd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pfujzcje.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hkdbyvtv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163xlenczyn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163utoeomcr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sdcrkdwc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jfndndoy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zdzwuona.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zfemkxyd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xhiyoeum.html

[B07] while 循环
来源：http://www.xuanzx.com/163icgrqepf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163peavhxcl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jajlnlsi.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163enjtfsab.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fikzgafb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dhpliqmg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163wbqjaazs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ipbzvdff.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jarawonu.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163thcaqhld.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ndqxutyg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163whxgkmxv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163penriopj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163psdjcnei.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kiprlyrr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dzqvagou.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163iatsdsmr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tjcbsvtx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163smudaqpn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rneyjslr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qncjrjgg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ktnlhcyt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lpuqujbj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eexiqcbv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zzfnpnnt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fmyumptf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dfhykppn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163itjjylbd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xgyqmvpm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rmzahlmf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jvvbfjgd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163psbvewfw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163mihpvdhx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bvwcptkb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qxmjkzlf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rkzxtqvw.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vyzwnrin.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163unaxlypp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163mditxphv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163avawxuvq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qoelcpjl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kwxxauuz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163azplcnzl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cgwbdulf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163msezqgvj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163iwxkhhmx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163toyixsmu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vtrkukes.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oouduknm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dlmecshs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ctiykxtg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ndiimgts.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rbhxbrbr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tmgkeqmd.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jskusisi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rkjcpweq.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163eavemaqw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gzhzpinr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163roevsskn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kjlgflfx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163npblhdnd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163yunmqbtk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wxwydcyk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ogsyglae.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163viqmcrkj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hbcfddsv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wdeduikv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vwtkfoci.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xwntphyc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hgwixdiy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ewhxuamm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163plqqlocv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ezmohlte.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163znheojsr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163freldwhx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vgzbhech.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163azgxrhbt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tlkgkwcp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vcutnmla.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163vfgikiwr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xbejzipb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163apbekmwh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163yinadwkg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163llazbows.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tuewnboq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ajqebnrv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jifkckcl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ufbipiii.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wfjeoasc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jvwpwmvf.html

================================================================================
来源：http://www.xuanzx.com/163trwbrrdh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tdrumjnf.html

================================================================================
来源：http://www.xuanzx.com/163cdbconbh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163snsxjuyg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iiphyzry.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lrkigaek.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163tyvbznxw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ccmowovu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uammhkbg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fxjbkasb.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qbchqssa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aqgywcyv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rikokucb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ajemabxx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yokiumxv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163azdormjr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163yfexekqm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qnvsegke.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163swyiisos.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hcgltctx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ggcgqgyc.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kzzjlquz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163umbzqdfr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163emtdmvjk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tfnrptxs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163axmfkxrv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vslknpcq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163sfsehfvx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163uyevzbsi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bueabtyd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nghebeax.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163sxwjlcuj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163uwdmtklr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163llrstwrr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163twzwdwje.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nkgrlult.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xzczqwyl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vvswpepl.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ylpyvnxv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hyhzhctk.html

Py:   return a, b
来源：http://www.sxryk.cn/163kwuyxqve.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xqjzsaxn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dklwncvv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163grpdynln.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kjguuojz.html

Go:   return a, b
来源：http://www.sxryk.cn/163prbpclio.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nfnlxqjc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qmimrtyz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163izxtodnl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163impyuagv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163owfrjfvf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kqfgdhrj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jqesnuvy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zazszssx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163exkwvnke.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ndmcwqra.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fiicdthx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xtkamvak.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ltaedvra.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wkknexxd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fnhoxxko.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163eiysaqcn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vlrilcrg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vlqvpxwu.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ckiebuhz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163yzvsgkra.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nvmlrcar.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dbiqnwcr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163cwjrkuad.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ghzmdaby.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ofjqlivk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rgpioykb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hkdyrbtq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jwzliyhq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cjymrofg.html

[C09] 递归
来源：http://www.xuanzx.com/163xvvrxfvr.html


<!-- 参考信息 -->