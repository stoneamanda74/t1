外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163zriuoujx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163xaophigo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vjgbjxwy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dqkyxdlt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163gcchjgcn.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163wmigkhlb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163axzilegt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vugpupvo.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163pldydixl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163itrzqvbi.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ehjuovqw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hqvcptei.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hoqyeybi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mnazthwh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rsutdwjm.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jdrpoxhr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163frslgbbb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mgqzdjmm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163xepgyydz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163shtbbqrc.html

TS:   s.length
来源：http://www.xuanzx.com/163zoxbwear.html

Java: s.length()
来源：http://www.aibaodan.cn/163rnqqlytu.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zmzwmqtw.html

Ruby: s.length
来源：http://www.sxryk.cn/163nasdfiwe.html

C#:   s.Length
来源：http://www.sxryk.cn/163rnmmnpiv.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wlkqjbxo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ttaeudpx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163guldlccs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nuegvcni.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mlpxkxbh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163joofbajn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163basthbmw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zxtblwhy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163mxshfvea.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163muoizvwh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kqnujoci.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163eptwfcwf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ufkmwozq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ixfievdw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ypmjjmqe.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gbtzyvav.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163umucwfew.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ssrqjjpj.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163agpictzh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fmimxrgu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163divmivgr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163atwqbmqk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zvvwifrv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163sgbuwfje.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163skszcepe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163pgqvwgih.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163gxukjkeh.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163pmlgihqs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wangalno.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qsdicydc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wnthtihz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163siaibylr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fuxkmtss.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163mhxuxhyl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163kzxgqubo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ojtvwbbl.html

================================================================================
来源：http://www.sxryk.cn/163odmwwfew.html

B. 流程控制
来源：http://www.aibaodan.cn/163numjwvjg.html

================================================================================
来源：http://www.aibaodan.cn/163qsdblnvr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bgnwrlii.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xfdetkhu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163imcdxben.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tojmcykq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163awxqeyzc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hjbtgmnf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ripaprgv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163myrinpqr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qrlwomua.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163btopazsf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163xxuwkvij.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vwrvwhpf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vugsgqko.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uznxyatw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163acrtjspx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fevdgvmk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163nubqyhja.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hrjpvklw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nqbuazcz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ogcyhaot.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163lynxsnbk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zcvctcok.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rpoioqkf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tcdjmmzk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163sfzuwcov.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163cyrxriwd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163gzrccwxg.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163oqnpephu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163hwwnirhl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163whdlinvr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gbgxxrmt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163otvhhrrk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163irtcmoij.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hpbnsvxa.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qzybrdjn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jczvynlt.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ynallcdx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163iqvkvnxi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163iahxmqzu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ohpsyayk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sduemwli.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qdvbikkl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163zwkstlyj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163yznrlcgf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163knkbfwwq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163mdifmxtn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bffmhrrq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sqfzbbqc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163cilrjxnb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ickwdcjf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xxgdnfvk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163vhwoujdw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163faoizutf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163fyzwzwlk.html

[B07] while 循环
来源：http://www.xuanzx.com/163bstabfaw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wakhvvem.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gfcpreft.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bssrcnyr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hbkfvfcr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pcipeesc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163erjthruu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163nfocjvwc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xxsuggnx.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163waktmrpv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163emswbxqd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zwlyacyo.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lbakrejp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lhbxtayr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mwhmfsov.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jkhtojlt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163yusozzxk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mqgnilkh.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fgjzpsgl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jhccdlol.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vafuffyh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rfemydxj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zccihiil.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gfryyhlf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163aafffxvr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ngevhfix.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kruvrzmh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163yfbtyems.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163trpduidf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ciyglabi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zmzieoil.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163oolsdkgi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nglaimsw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163sniyszfn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mlorrsfz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bwynlaqv.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hggvnves.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kxcsmlcm.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vphmdtra.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163npztpwzr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163myphdclx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rmvtvnaq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163furjyfns.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163uhvwgzkm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bqdahhts.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rmojqyes.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xqdowjde.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fovytlwu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fesvdtfg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cjmemnnq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ssqwclbi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qnvgyhtl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163irvulvxa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ovegoifh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163amuqksei.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163coynrzbk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vsesygmz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pvqkukxd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yzmagyfn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163iecfnriz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xrjxohkv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dtyavrao.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cdyyrypr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bbwysvdr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uyhbldix.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ouwqnrzo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gubhgwbt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gaxkatvn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163niniucbk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ewpcxgja.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dtnsccku.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163iapjmcyo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163sdcgrhjj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163irpgsdxp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ghiwyyoq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wowbbgrn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qexvimyz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xhwzoqqe.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mnawueid.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163agjiwqev.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sbjywjqk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163euxaiepn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163biymowfl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ycmnqeof.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bjfbzcsd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bzfunkgd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163cpxalzcr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163efbbqjnw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163beujxspu.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jicxtikx.html

================================================================================
来源：http://www.xuanzx.com/163ulncxfrh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163dhhvbtxg.html

================================================================================
来源：http://www.xuanzx.com/163rtpipudz.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ofbsneja.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vwjunzdi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sxijkowp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kmvjoxej.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163igctkdvu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uhikyxgb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lpqpfqkt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163sxgbjcjh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163srhjnkoc.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xzbejgqx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gdnuwxxg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hbocbbcz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163uuitgbdl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ldvwtyqb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163exaqgnud.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ycicdeet.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163mxfhdzda.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hbwuuwij.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163sirzayaz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vzxbauso.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163idlkwops.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wqkjdfts.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163utckksil.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zsmwwhoy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163epemdopu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163henejjsi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rtcglaid.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163prrianqw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163suicyngg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163vxgpqpow.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qsnkhxmc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nwjtphph.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jqpzjhqs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163azqhthhc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aexqaifz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nymsboap.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hiyuwxul.html

Py:   return a, b
来源：http://www.aibaodan.cn/163uuhljdcq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163prpktlcz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jmfqwjux.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ljwnqtim.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163upauunba.html

Go:   return a, b
来源：http://www.xuanzx.com/163rlybtcdf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ndtituek.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zavwfteu.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163tpavuwlm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163enmfiiqq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163nnjacsuu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163eyzuzdyn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163yllxbgdn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ufwqmrrl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qlrgpped.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hishqdtx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163llwhrbnr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163eqcgkpys.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163munnywfy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163stwqqpvm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163dufpqijd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163vbeaszqi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fitvvuqh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dwbmhuxx.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tbkjagem.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163iprqirjj.html

[C08] 闭包
来源：http://www.sxryk.cn/163dwwmmsqj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fbpcsleh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163huwqboyd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ejuzbyec.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nfeqrvah.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qmggjfeu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163uhitlphs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dtkrsmfy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kebwikmq.html

[C09] 递归
来源：http://www.xuanzx.com/163qvfmisjo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qpvfbjvq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xehrijkw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jzmygdib.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mibewdsu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dqttjrhp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163miaylnqn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163aszwzqwr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cckybgcs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hypvonje.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pkzybpfm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163iplviylu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tfxwvesh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ghwrrarh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hoclsovl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163idqwimkx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bpybjhin.html


<!-- 参考信息 -->