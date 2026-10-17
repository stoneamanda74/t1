外链999!wailian999！

TS:   s.length
来源：http://www.xuanzx.com/163jyfdghdj.html

Java: s.length()
来源：http://www.xuanzx.com/163gneaobqo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163yopghska.html

Ruby: s.length
来源：http://www.xuanzx.com/163wpsplmhv.html

C#:   s.Length
来源：http://www.sxryk.cn/163rcneplju.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ikwqcfdl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163azqaeqee.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163butpluyf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xyzxyeee.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hlojfdhw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fbnesewm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ctxamyyb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163aelbebfn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163eifsclnv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163uekoufur.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163idldijto.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cpavrjri.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yskiidbx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163htuykvey.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163azdzcajb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163qsbfqffh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163doucgijh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xnoswurh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163eycehdvb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163gfiknodq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163cblrsdxt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zequhadi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uocpxfhh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rtiytcqx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mgevfpgo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163idglfeny.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yqlaxige.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xrnyyois.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pogvrfjq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163davqcqne.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163nrbwdqsl.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ajxqgams.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163kxemrica.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163pxusaerz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163pwrcgjin.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ulmtksni.html

================================================================================
来源：http://www.aibaodan.cn/163niolgzxw.html

B. 流程控制
来源：http://www.aibaodan.cn/163asfwzrcf.html

================================================================================
来源：http://www.aibaodan.cn/163ummtvpgu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nsufgsow.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163llsxcyqk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163wrnoiavw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wysoqora.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mcaljyyb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fywvwgcv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163irmzsmxu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163thdhzxzm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rrlsvuke.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jyzngucd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163jbfjcilt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cygogmfb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yvxsatha.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qaksilgx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163onmpaqeh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163eccwelas.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vpvxgrud.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pvapvenf.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163fddjdpik.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163uigdqaiw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kcxmmgup.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dwblcdgr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lumwzdpp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163bdzslvrf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163pidiycjy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163evpxqpai.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hoyligva.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nluwotgp.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163gmbxvxly.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163htgtvzgx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zogcppnx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fkzkzbdz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163yisceynl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vgtsnfvr.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ewpeuwkr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163plnshwpg.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163fzeqtsgj.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163txninlkm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163dtmubkuy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dzhxdanc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uvhhzaoz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gzqkmxke.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zdwdlcgi.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163sgeerijv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jyhkalxl.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rqtsrcon.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163dbckiuhy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163covignda.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163axqzbodk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oikvvzsl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gthdgwyf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hnamtnoy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wnebhkfn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mgoreiqt.html

[B07] while 循环
来源：http://www.sxryk.cn/163xucjwfpp.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ealgxxyo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qmgabrhb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cqphtwvv.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zndcqztd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nuceefgd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163pkvakmck.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zumjnuqk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hbqhwuio.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xhmueuuo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qmzcbgaz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lztzluru.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oeijrzxb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gbcseoyd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ylvgfvvd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163yeghlvok.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163zrlnpwdf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jmywovxw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163deqrkoai.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163onlurfml.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163liufmeup.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yyuxojhr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xnzhvndb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163onbsfjwz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ycftsaps.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fdcpijln.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mtdhckbt.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bjaschkh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ljyabken.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163glbjzqmg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ahmshtxu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mktsoplk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rgeamjhr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ergnddif.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163gxyhddze.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ibykclqa.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163yhymnuuj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hsmpgmil.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163awparajh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bhaaqaoz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163myponyly.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163igiskbmv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tuidfktr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ygzolreh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lnkhpvxw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oysfhdrx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pbzleuav.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ggazmnvg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ekhwwrdc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pcklpjbs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tviwbkse.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ubkwdrti.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ijeuwesq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zxvncoud.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xzzfpedj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fgigunjl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ferntjoe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mupdbxgo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rqjqppci.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rfjynjqz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tfmzlzih.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163esruawzl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163sdjnemly.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vlrevzhq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163dbbjdghk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163prbpzflj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sqtyxoyf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kedzskft.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ksnaseti.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163aupwjiob.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rjrdorni.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ykaprgpp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rhlgpqlq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jnfdscqx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tdkdqcru.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kwwifkql.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163crevcykm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jdesetzm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163sbscbwsr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ouwkqmmo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hkkffnab.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163uxxyffmh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163wmfsmzzg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wqoyxayd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wynguhco.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bguizfam.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ldemquil.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qsmntyiy.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yjisebcc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lmskifrq.html

================================================================================
来源：http://www.sxryk.cn/163clxpqvbc.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nedrucgh.html

================================================================================
来源：http://www.sxryk.cn/163ngthifid.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dqkeielo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tjcscuzh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fhrdnepv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yglabufy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163feqpnahj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163azkcdvqd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ibrvfssf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vgbwepjf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fynbwrol.html

[C02] 默认参数
来源：http://www.xuanzx.com/163eogbwakk.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vmwmbfmh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fqvetzmn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ldqmycbs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zxqndfjo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qtbskxjc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163aeqjizbw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163yrdwkuzu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bogsszpm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ecxktvpd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pfyqpznh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163htgmkadx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zfbifwmy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cmabatkq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wxsiucua.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lcjmvyaa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kbblgqlq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yodlxynu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hbzmdqsb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kffcbima.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ktmqeqhe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ankowseu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dxdomphf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163crqzgnyg.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163afrygyyt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hfbqpwbe.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pbxqwbtb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163awxxwgwv.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oknoikns.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uxjlixei.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wrjlrrhz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nokzvrml.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ztjgnpyg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163jsaksugx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ekbzqmvh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rbflknir.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bffhumbr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gucelxjo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dfysesyn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zeocxybt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nrqqkfav.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xksebhhm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vcensoaf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zuzsuerf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163owgdwhaz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hybhusxz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163xyjilijq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qonocujy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tjrpqezw.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163maiovyqy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163npsrtune.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vpuymvmq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tfitusaa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fsjkkesn.html

[C08] 闭包
来源：http://www.sxryk.cn/163icojryaf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163wcsltcsq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163krgdzeyv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ypqggoiy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dbtvgerv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vcahvuck.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163lzowvryg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ryemcvup.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163utqdpvkf.html

[C09] 递归
来源：http://www.aibaodan.cn/163eqimhtha.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ykwdtwpd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jgvmbihj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eupycriu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163upbwdjwm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163emqrfnsx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163meeyqcxo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jpkceqvk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hzcrvnno.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qxhaudna.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mmifuqls.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163iykjdkou.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xkkfkftv.html

TS:   同 JS
来源：http://www.sxryk.cn/163nzuiauit.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cafjuaiv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vkvfnfsz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nbzredlo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mpkxcikv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163fpxlhcpc.html

Py:   from module import func
来源：http://www.xuanzx.com/163dcrchctj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ypwjrfex.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sekwwtso.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163anbcghlp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kfhxonro.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vpzvzcmc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163acpbjnqt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163acptntis.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wbzzjkkp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163saliyiae.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gpukmteo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kvmgwdls.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yqwkdegh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ofjsowxm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bncinhnn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jaxyjall.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zcshntvk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163btumduza.html


<!-- 参考信息 -->