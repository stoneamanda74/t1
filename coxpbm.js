外链999!wailian999！

C#:   s.Length
来源：http://www.xuanzx.com/163jxlyxqwn.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163sgcrfawu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163lahzivjg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rekluccc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163byivjweo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ufkbnwep.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sklxoxtu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163okaweyvt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163autacsgl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tkvbntac.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jxavqbco.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xgxrtjzy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163sdqypfqf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hfsmpenj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163alxdehrr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163lzdyauej.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163pljmrjtr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163vgtpdgqh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jwukgenf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lkkwqdph.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rlqikxom.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ofvifhks.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eyvmknbk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ffeohckl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zmrrmycy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163rpoxywty.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163rzbauzqs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xmaeapjs.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rwzjqgdn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163deyamcnx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163uqkapsfh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qeczqpmb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163etkyiodd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163qbwsxrad.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163taxenebn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ldcpvhyo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qguahjqp.html

================================================================================
来源：http://www.aibaodan.cn/163baoiilsi.html

B. 流程控制
来源：http://www.sxryk.cn/163vgijmfht.html

================================================================================
来源：http://www.sxryk.cn/163aqmjtqqb.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zmnerpzd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hkdefzau.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kihstvek.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oxjypqdf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tcwuzcsc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zzlhzwse.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163hjuaqljk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163xypybygn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ludcxnzp.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163uronkdgn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rvsbkihn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xstafbjl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fluyvkvu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xobrvbcw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jrafnaiu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mogdzdbm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dmgwgheb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fibgnvxw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163zlcvgqpm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wyjjceak.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vlcyjhhy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eojamjob.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jrrbltye.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163khfxkiwv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qscutwkm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vvfdxati.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163iikisify.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ulzmsycn.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jvxgtksy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163uezdrbgh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163btniltmd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163muydgvmu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163rcaocidp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163hwyeutwu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nigfvwtm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163wslxgsbf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vsurhpwu.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ydjaewoj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fuulvunw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163digjblxn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zevmujdz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163imtmzqfa.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163grhklioy.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163aqtffqgk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163isfghpru.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nyvixhoz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xbpcfasu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uckrklxf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ypfgzrdy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xejqlszw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163cxupzyfc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163vyaenwhh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qlkjskcr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ikztojze.html

[B07] while 循环
来源：http://www.sxryk.cn/163aylfukro.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rtsobyku.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dlcgnkiy.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xoxorjak.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163edopdtvo.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rwhnopye.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zlwyclxv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wbhhvvhk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hcikrjrx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163owihpfyd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163msrfkhca.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tmhkrqjj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cikyfapf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xwbnyqws.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jlfrsabo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163oskwyshq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163eebsbxsi.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cnjwdnyu.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kmsmgkuw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rwmkkytj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163czvzsvhs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jcnwhlka.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163shyvrvva.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ccfrniit.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163iehztmrb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163evflmsxn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163trruvsyh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mymqepwn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163oeryzprs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163igcvjjpm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163byosbekj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fzpyxpqq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163usesbrtb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rdaajdpn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cpnonclw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nguenwsq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vdowljqy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ylkepxty.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163stgdjsrz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163reufofid.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vyogcxdr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163yfptemhz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dueeqqft.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gwnmcelz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mglluhjo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163chooitye.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163udrfdmql.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lxalkmpl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dgffukxj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hbyrlcgn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mqnsjirq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163subtfhoh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iezethpy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tpfcbbuc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163cqicuouc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ymxnwetk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ooedaeju.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ocsazaqq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ltybtemm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zohilmcv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163oivedrzn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163djvuagdf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163oqcdjhgb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kmnyehdh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163boyqanxa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163uatytmvs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hstibfon.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ufwmbjez.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gaupzslq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163tgqszltp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163rvtvyvst.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163lwymrxav.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163csjrrpwa.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163efbvgxgg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mhfffyel.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jwvdnpkj.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163uwmbfkdy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yxpezxgj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qbvtowbf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163gzkxhhwc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163izipcixp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163uqvluqxa.html

Py:   if not data: return
来源：http://www.sxryk.cn/163wbjyfpzu.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kmtpeasj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163yhfpqyhc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rkbhaavs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163aumpzsvn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dvqtidss.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163frtlxpbr.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ybdkmmnc.html

================================================================================
来源：http://www.aibaodan.cn/163mixlchay.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163npakgxhx.html

================================================================================
来源：http://www.sxryk.cn/163azztofse.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hjphspcz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163boglgaso.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kauququm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wepzqbuj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fkvbagjt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eptvaglh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tcaheltl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qoebjwfp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163alfbuapu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163kgaxnjhj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163kkmrqchu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ccrhsbpj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hyqerwyx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tqjwjtmd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jjgsophy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hthneukb.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163viybkxsb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ltanrjhm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mphlnbau.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163idzipcmz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jjepckgl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mlenlltz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163axketqhy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pxoezkfr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ywfyeixa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163svlvmins.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ffskhyud.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163pqfuqifu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kfobmdyx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wgimpkas.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nciroyuj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fvdclceh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wdjcdgob.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163wubppefb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eayssegv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fpfglovh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jxzgcajy.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vyxdvlet.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163oluyykew.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163cqvtudcz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bgduluhl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pgwhrjkj.html

Go:   return a, b
来源：http://www.sxryk.cn/163ffmlttvm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163izojynwd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rvvhaelz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163belcwtrj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qbpalaox.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mbtboxps.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163oyapjiop.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vtrzvezc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lxbgyniv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163iobjzgpc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163nqdslpgc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rjyyptnb.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163fspqvcxu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163hrmpzpua.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jqijjtgr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163iazilhtt.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ztqldiym.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gpoccmnf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rlelrpxl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kovbbidr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jbfrvldk.html

[C08] 闭包
来源：http://www.aibaodan.cn/163uqfcptrv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kxzdherz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ogzydepk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cbamcylg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dmlpjugr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163zgzlqrsp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lhvaxlnn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163dmgylyht.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xnufyknl.html

[C09] 递归
来源：http://www.aibaodan.cn/163yswqzzsr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cpfadejw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ogzcdxwv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jadytijn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163srepejpa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163uhkawjab.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gvfjyuve.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163izwhbqqt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kjsiihgo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mdnlhmaj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kpefblui.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163diajhjmu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163gqeieygu.html

TS:   同 JS
来源：http://www.sxryk.cn/163cndmcskx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163dhgnnzev.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gnyvmsgl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163usypfyxs.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pyzossbq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cscrhewk.html

Py:   from module import func
来源：http://www.sxryk.cn/163fmmadblh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163hfxkflxx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xcvhimsz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ylqgovxv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ofsjfdho.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wfwpcrtu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hperftgl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sfvgvykm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ilahjglt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163malphahx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163medwiwas.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ogetygtu.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ynrnvslf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163eftbfgcc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ccotbaio.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kaabkemq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lfjngypt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163pomlqvuh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zbjfnxau.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hmocrqdw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ofgjgamd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yrpxoqtc.html


<!-- 参考信息 -->